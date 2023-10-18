import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Modello, Prodotto } from './interfaces/categorie';
// import { ItemCarrello } from './interfaces/categorie';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private subtotale: number = 0;
  updateCarrelloSubject = new BehaviorSubject<any[]>([]);
  carrello: Array<any> = [];
  updateSubtotaleObservable: any;
  updateSubtotalObservable: any;

  constructor() { }

  /**
   * Metodo che effettua l'aggiornamento del carello
   * @param item dovrebbe essere un prodotto, TODO interfaccia da sistmare
   */
  updateCarrello(item: any) {
    const ordineNuovo = {...item, quantita: 1};
    const indiceElementiUgualiNelCarello = this.carrello.indexOf((o:any) => o.id == item.id);
    if (indiceElementiUgualiNelCarello > -1) {
      this.carrello[indiceElementiUgualiNelCarello].quantita+= 1;
    } else {
      this.carrello.push(ordineNuovo)
    }
    this.updateCarrelloSubject.next(this.carrello);
  }


  eliminaOrdine(item: any) {
    const posizioneProdotto = this.carrello.indexOf(item);
    // verifica che ci sia un prodotto da eliminarte
    if (posizioneProdotto > -1) {
      this.carrello.splice(posizioneProdotto, 1);
    }
    this.updateCarrelloSubject.next(this.carrello);
  }

  setSubtotale(subtotale: number) {
    this.subtotale = subtotale;
  }
  getSubtotale(): number {
    return this.subtotale;
  }
}