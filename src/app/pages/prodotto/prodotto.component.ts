import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { prodotti } from 'src/app/interfaces/categorie';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.scss']
})
export class ProdottoComponent implements OnInit {
  spinningArray: prodotti[] = [];
  faStar = faStar;
  prodotto?: any;

  
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Ottenere l'ID del prodotto dalla route
    
    const prodottoId = +this.route.snapshot.params['id'];

    // Effettuare una richiesta HTTP per ottenere il prodotto specifico in base all'ID
    this.http.get('/api/product/' + prodottoId).subscribe((data: any) => {
      // Controlla i dati ricevuti nel log
      console.log("DATI DEL PRODOTTO = ",data);
      this.prodotto = data; // Assegna il prodotto ricevuto alla variabile prodotto
    });

    // Effettua una richiesta HTTP per ottenere il database JSON
    this.http.get('/api/categoria').subscribe((data: any) => {
      console.log("DATI DELLA CATEGORIA = ", data); // Controlla i dati ricevuti nel log
      // Trova l'array "SPINNING" nei dati e assegnalo a spinningArray
      this.spinningArray = data.find((cat: any) => cat.nome === 'SPINNING')?.prodotti || [];
      console.log(this.spinningArray); // Controlla i dati assegnati alla variabile
    });

  }
}
