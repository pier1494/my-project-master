import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { prodotti } from 'src/app/interfaces/categorie';

@Component({
  selector: 'app-spinning',
  templateUrl: './spinning.component.html',
  styleUrls: ['./spinning.component.scss']
})
export class SpinningComponent implements OnInit {
  spinningArray: prodotti[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Effettua una richiesta HTTP per ottenere il database JSON
    this.http.get('/api/categoria').subscribe((data: any) => {
      console.log(data); // Controlla i dati ricevuti nel log
      // Trova l'array "SPINNING" nei dati e assegnalo a spinningArray
      this.spinningArray = data.find((cat: any) => cat.nome === 'SPINNING')?.prodotti || [];
      console.log(this.spinningArray); // Controlla i dati assegnati alla variabile
    });
  }

  // Funzione per reindirizzare alla pagina "prodotto" quando viene fatto clic su un prodotto
  redirectToProdotto(id: number): void {
    this.router.navigate(['/prodotto', id]);
  }
}
