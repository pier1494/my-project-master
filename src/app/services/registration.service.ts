import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = '/api'; 

  idCounter = 0;

  constructor(private http: HttpClient) {}

  register(nome: string, cognome: string, email: string, password: string): Observable<any> {
    const userData = { id: this.idCounter, nome, cognome, email, password };
    return this.http.post(`${this.baseUrl}/users`, userData);
  }


}
