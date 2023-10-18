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
    this.caricaRecensioni();
  }

  caricaRecensioni() {
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
    const index = this.recensioniArray.findIndex(item => item.id === recensione.id);
    if (index !== -1) {
      this.recensioniArray[index] = { ...recensione };
      console.log('Modifiche salvate con successo.');
    } else {
      console.error('Recensione non trovata per l\'aggiornamento.');
    }
    if (recensione.id) {
      this.http.put('/api/recensioni/' + recensione.id, recensione).subscribe((res) => {
        console.log("AGGIORNAMENTO DB", res);
      })
    } else {
      this.http.post('/api/recensioni/', recensione).subscribe((res) => {
        console.log("AGGIUNTA RECENSIONE AL DB", res);
        this.recensioneNew.recensione = '';
        this.aggiornaComponente()
      })
    }
  }

  aggiornaComponente() {
    this.caricaRecensioni();
  }

  mostraInput(): void {
    this.inputVisibile = true;
  }

  nascondiInput(): void {
    this.inputVisibile = false;
  }
}
