import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prodotti } from 'src/app/interfaces/categorie';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-bolognese',
  templateUrl: './bolognese.component.html',
  styleUrls: ['./bolognese.component.scss']
})
export class BologneseComponent implements OnInit {
  bologneseArray: prodotti[] = [];
  

  constructor(private http: HttpClient) { }
  faStar = faStar;
  
  ngOnInit(): void {
    // Effettua una richiesta HTTP per ottenere il database JSON
    this.http.get('/api/categoria').subscribe((data: any) => {
      console.log("DATI DELLA CATEGORIA: ", data); // Controlla i dati ricevuti nel log
      // Trova l'array "bolognese" nei dati e assegnalo a bologneseArray
      const idProdotti = data.find((cat: any) => cat.nome === 'BOLOGNESE')?.prodotti || [];
      // inizializzo l'array di prodotti
      this.bologneseArray = [];
      for (let idProdotto of idProdotti) {
        this.http.get('/api/product/' + idProdotto).subscribe((datiProdotto: any) => {
          this.bologneseArray.push(datiProdotto)
        })
      }
      return this.bologneseArray;
    });
  }

}



