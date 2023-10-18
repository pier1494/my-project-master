import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recensioni } from '../interfaces/categorie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificarecensioniService {
  constructor(private http: HttpClient) { }

  caricaRecensioni(): Observable<recensioni[]> {
    return this.http.get<recensioni[]>('/api/recensioni');
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
