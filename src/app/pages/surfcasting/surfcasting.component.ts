import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, pipe, switchMap } from 'rxjs';
import { recensioni } from 'src/app/interfaces/categorie';
import { ModificarecensioniService } from 'src/app/services/modificarecensioni.service';

@Component({
  selector: 'app-surfcasting',
  templateUrl: './surfcasting.component.html',
  styleUrls: ['./surfcasting.component.scss']
})
export class SurfcastingComponent {
  recensioniArray: recensioni[] = [];

  /** flag di verifica
   * Proprietà utilizzata per verificare la recensione che è in modifica
   */
  recensioneInModifica: any;

  inputVisibile = false;
  recensioneNew: recensioni = { recensione: '' } as recensioni;
  data: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private modificarecensioniService: ModificarecensioniService,
  ) { }

  ngOnInit(): void {
 this.aggiornaComponente()
  }

  /**
   * 
   * @param recensione recensione in modifica
   */
  avviaModifica(recensione: any) {
    this.recensioneInModifica = recensione;
  }

  salvaModifiche(recensione: recensioni) {
    const index = this.recensioniArray.findIndex(item => item.id === recensione.id);
    if (index !== -1) {
      this.recensioniArray[index] = { ...recensione };
      console.log('Modifiche salvate con successo.');
    } else {
      console.error('Recensione non trovata per l\'aggiornamento.');
    }
    this.modificarecensioniService.salvaRecensione(recensione).subscribe((res) => {
      if (recensione.id) {
        console.log("AGGIORNAMENTO RECENSIONE AL DB", res);
      } else {
        console.log("AGGIUNTA RECENSIONE AL DB", res);
        this.recensioneNew.recensione = '';
      }      
      this.aggiornaComponente()
    });

  }

  aggiornaComponente() {
    this.modificarecensioniService.caricaRecensioni()
   .subscribe(res => {
        this.recensioniArray = res;
        console.log(res);
      }); 
  }

  mostraInput(): void {
    this.inputVisibile = true;
  }

  nascondiInput(): void {
    this.inputVisibile = false;
  }
}
