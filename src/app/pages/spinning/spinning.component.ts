import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { prodotti } from 'src/app/interfaces/categorie';

@Component({
  selector: 'app-spinning',
  templateUrl: './spinning.component.html',
  styleUrls: ['./spinning.component.scss']
})
export class SpinningComponent  implements OnInit {
  spinningArray: prodotti[] = [];
  faStar = faStar;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Effettua una richiesta HTTP per ottenere il database JSON
    this.http.get('/api/categoria').subscribe((data: any) => {
      console.log(data); // Controlla i dati ricevuti nel log
      // Trova l'array "bolognese" nei dati e assegnalo a bologneseArray
      this.spinningArray = data.find((cat: any) => cat.nome === 'SPINNING')?.prodotti || [];
      console.log(this.spinningArray); // Controlla i dati assegnati alla variabile
    });
  }

}
