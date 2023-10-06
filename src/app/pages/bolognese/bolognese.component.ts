import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prodotti } from 'src/app/interfaces/categorie';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bolognese',
  templateUrl: './bolognese.component.html',
  styleUrls: ['./bolognese.component.scss']
})
export class BologneseComponent implements OnInit {
  bologneseArray: prodotti[] = [];
  

  constructor(private http: HttpClient) { }
  faStar = faStar;
  // oneStarTemplate = null;
  // twoStarTemplate = null;
  // threeStarTemplate = null;
  // fourStarTemplate = null;
  // fiveStarTemplate = null;
  ngOnInit(): void {
    // Effettua una richiesta HTTP per ottenere il database JSON
    this.http.get('/api/categoria').subscribe((data: any) => {
      console.log(data); // Controlla i dati ricevuti nel log
      // Trova l'array "bolognese" nei dati e assegnalo a bologneseArray
      this.bologneseArray = data.find((cat: any) => cat.nome === 'BOLOGNESE')?.prodotti || [];
      console.log(this.bologneseArray); // Controlla i dati assegnati alla variabile
    });
  }

}



