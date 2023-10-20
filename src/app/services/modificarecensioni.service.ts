import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { recensioni } from '../interfaces/categorie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificarecensioniService {
  constructor(private http: HttpClient) { }


  caricaRecensioni() {
    return this.http.get<Array<recensioni>>('/api/recensioni')
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
      }
  salvaRecensione(recensione: recensioni): Observable<recensioni> {
    if (recensione.id) {
      // Esegui una richiesta PUT per aggiornare la recensione esistente
      return this.http.put<recensioni>('/api/recensioni/' + recensione.id, recensione);
    } else {
      // Esegui una richiesta POST per aggiungere una nuova recensione
      return this.http.post<recensioni>('/api/recensioni/', recensione);
    }
  }
}
