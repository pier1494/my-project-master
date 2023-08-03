import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { ItemCarrello, prodotti } from '../interfaces/categorie';

@Injectable({
  providedIn: 'root'

})
export class CommonService {
  isLogged = new BehaviorSubject<boolean>(false);
  carrello: ItemCarrello[] = [];


  constructor(private http: HttpClient) { }

   // Metodo per impostare lo stato di accesso
   setLoggedIn(isLoggedIn: boolean) {
    this.isLogged.next(isLoggedIn);
  }

  
  /** 
  login(): Observable<any> {
    const url = 'api/login';
    return this.http.get<any>(url);
  }
  */
  login(credenziali: any): Observable<any> {
    return this.http.get(`/api/users?email=` + credenziali.email).pipe(map((utenti: any) => {
      // controllo se l'utente ricercato esiste
      const utente = utenti?.length > 0 ? utenti[0] : null;
      // se non esiste esco dal metodo
      if(!utente){ 
        alert("ERRORE: utente non registrato");
        return null;
      }
      if(utente.password == credenziali.password) {
        // aggiornare isLogged
        this.isLogged.next(true);
        return utente;
      } else {
        // PASSWORD non corretta
        this.isLogged.next(false);
      }
      return null;
    }));
  }


  // Metodo per ottenere lo stato di accesso
  isLoggedIn(): Observable<boolean> {
    return this.isLogged;
  }

  //restituisce tutti gli elementi nell'arrey categorie
  getAllcategorie(): Observable<any[]> {
    const url = 'api/categoria';
    return this.http.get<any[]>(url);
  }

  //restituisce tutti gli elementi nell'arrey categorie
  getAllProducts(): Observable<prodotti[]> {
    const url = 'api/products';
    return this.http.get<any[]>(url);
  }

  getProduct(id: any): Observable<any> {
    return this.http.get<any>('api/product/' + id);
  }



  getCarrello() {
    return this.carrello;
  }

  eliminaOrdine(prodotto: any) {
    const posizioneProdotto = this.carrello.indexOf(prodotto);
    // verifica che ci sia un prodotto da eliminarte
    if (posizioneProdotto > -1) {
      this.carrello.splice(posizioneProdotto, 1);
    }
  }


 


}
