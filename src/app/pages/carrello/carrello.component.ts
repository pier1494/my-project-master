import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ItemCarrello } from 'src/app/interfaces/categorie';
import { CommonService } from 'src/app/services/common.service';
import { SharedDataService } from 'src/app/shared-data-service.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  fatrashcan = faTrashCan;
  carello: ItemCarrello[] = [];
  faArrowRight =  faArrowRight

  costiSpedizione: number = 0;
  sommaTotaleSenzaIva: number = 0;
  iva: number = 0;
  subtotale: number = 0;
  item: any;

  maxVisibleProducts = 5;

  constructor(
    private router: Router,
    private servizio: CommonService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
    this.sharedDataService.updateCarrelloSubject.subscribe(res => {
      this.carello = res;
      this.calcolaResoconto();
    });
  }

  // getTotalPrice(): number {
  //   let total = 0;
  //   for (const item of this.item:) {
  //     total += this.item.price * this.item.quantity;
  //   }

  //   return total;

  // }



  eliminaOrdine(ordine: any) { 
    if (confirm('Sei sicuro di voler rimuovere questo prodotto?')) {
      this.sharedDataService.eliminaOrdine(ordine);
      this.calcolaResoconto();
      alert('Eliminazione avvenuta con successo');
    }}
 
      getTotalPrice(): number {

    let total = 0;

    for (const item of this.item) {

      total += item.price * item.quantity;

    }

    return total;

  }
  

  private calcolaResoconto() {
    this.costiSpedizione = 0;
    this.sommaTotaleSenzaIva = this.carello.reduce((acc, ordine) => acc + (ordine.prezzo * ordine.quantita), 0);
    this.iva = this.sommaTotaleSenzaIva * 0.22; // Calcolo dell'IVA sul totale del prodotto
    this.subtotale = this.sommaTotaleSenzaIva + this.iva; // Somma del totale del prodotto con l'IVA
    // Limita il numero di cifre decimali a due
    this.sommaTotaleSenzaIva = Number(this.sommaTotaleSenzaIva.toFixed(2));
    this.iva = Number(this.iva.toFixed(2));
    this.subtotale = Number(this.subtotale.toFixed(2));
    this.sharedDataService.setSubtotale(this.subtotale); // Imposta il subtotale nel servizio condiviso
  }
  updateSubtotal() {
    this.calcolaResoconto();
  
}
}