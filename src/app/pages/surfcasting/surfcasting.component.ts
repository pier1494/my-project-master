import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, pipe, switchMap } from 'rxjs';
import { recensioni, } from 'src/app/interfaces/categorie';

@Component({
  selector: 'app-surfcasting',
  templateUrl: './surfcasting.component.html',
  styleUrls: ['./surfcasting.component.scss']
})
export class SurfcastingComponent {
  recensioniArray: recensioni[] = [];
  recensioneInModifica: any;
  inputVisibile = false; // Per gestire la visibilità dell'input
  recensioneNew: recensioni = {recensione: ''} as recensioni;


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.http.get<Array<recensioni>>('/api/recensioni')
    .pipe(
      map((recensioni: recensioni[]) => {
        return recensioni.map(recensione => {
          return {
            ...recensione,
            nuovaProprieta: 'NuovoValore'
          };
        });
      })
    )
    .subscribe(res => {
      this.recensioniArray = res;
      console.log(res);
    });
  


 

  }
  avviaModifica(recensione: any) {
    this.recensioneInModifica = recensione;
  }

  salvaModifiche(recensione: recensioni) {
    // Trova l'indice della recensione da aggiornare
    const index = this.recensioniArray.findIndex(item => item.id === recensione.id);
  
    if (index !== -1) {
      // Aggiorna la recensione
      this.recensioniArray[index] = { ...recensione };
      // Puoi anche eseguire altre operazioni necessarie, ad esempio, mostrare un messaggio di successo.
      console.log('Modifiche salvate con successo.');
    } else {
      console.error('Recensione non trovata per l\'aggiornamento.');
    }
    if (recensione.id) {
      this.http.put('/api/recensioni/' + recensione.id, recensione).subscribe((res) => {
        console.log("AGGIORNAMENTGO DB", res);
      })
    } else {
      this.http.post('/api/recensioni/', recensione).subscribe((res) => {
        console.log("AGGIUNTA RECENSIONE SUL  DB", res);
      })
    }

  }
  
  mostraInput(): void {
    this.inputVisibile = true;
  }

  nascondiInput(): void {
    this.inputVisibile = false;
  }
  
}





