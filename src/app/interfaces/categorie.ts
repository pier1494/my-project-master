export interface categoria {
    nome: string;
    prodotti: Array<prodotti>;
    sottocategorie: Array<sottocategorie>;
};
export interface sottocategorie {
    nome: string;
    prodotti: Array<prodotti>;
}

export interface prodotti {
    id:string;
    nome: string;
    codice: string;
    prezzo: string;
    img?: string;
    rating:number;
    categoria: string;
}

export interface Prodotto {
    id: number;
    nome: string;
    codice: number;
    prezzo: string;
    othersImgs: Array<any>;
    img?: string;
    videoUrl: string;
    modelli: Array<Modello>;
};

export interface Modello {
    nome: string;
    img: string;
    prezzo: number;
    rating:number;
    prezzoOriginale?: number;
    caratteristiche: Array<string>;
  }

export interface caratteristiche {
    Cuscinetti: string,
    rapporto: string,
    Capacità: string,
    MaxDrag: string,
    Peso: string,
    Rapporto: string,
    Modello: string,
    Codice: string,
}

export interface ItemCarrello {
    id: string;
    img: string;
    nome: string;
    prezzo: number;
    modelloSelezionato: Modello;
    quantita: number;
}

export interface user {

    username: string;
    password: string;
    nome: string;
    cognome:string;
}