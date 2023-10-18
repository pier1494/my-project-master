import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recensioni } from '../interfaces/categorie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificarecensioniService {

  constructor(private http: HttpClient) { }

  getrecensioni(): Observable<recensioni[]> {
    const url = '/api/recensioni';
    return this.http.get<recensioni[]>(url);
  }
  // .pipe(
  //   map((recensioni: recensioni[]) => {
  //     return recensioni.map(recensione => {
  //       return {
  //         ...recensione,
  //         nuovaProprieta: 'NuovoValore'
  //       };
  //     });
  //   })
  // )
}
