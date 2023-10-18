import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { Modello, Prodotto, categoria, prodotti } from 'src/app/interfaces/categorie';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { SharedDataService } from 'src/app/shared-data-service.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  faStar = faStar;

  isLogged: boolean = false;
  datiCatalogo: categoria[] = [];
  categoriaSelezionata: string | null = '';
  prodottiCategoria: prodotti[] = [];
  subscription: any;
  prodotto: prodotti[] = []

  constructor(private catalogoService: CatalogoService,
    private route: ActivatedRoute,

    private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    // sto inizializzando le variabili del componente (sono all'init)
    this.categoriaSelezionata = localStorage.getItem('categoriaSelezionata');
    // sto dichiando una subscription in modo da restare aggiornato agli eventi del refresh
    this.subscription = this.catalogoService.refresh.subscribe(res => {
      // questo il blocco che viene invocato a ogni aggiornamento del refresh
      console.log("PASSO DA QUI", res);
      if (res) {
        this.categoriaSelezionata = localStorage.getItem('categoriaSelezionata');
        this.getDatiCatalogoFromCatalogoService();
      }
    });
  }

  /**
   * Metodo che prende i dati del catalogo per visualizzare i prodotti
   */
  private getDatiCatalogoFromCatalogoService() {
    this.catalogoService.getDatiCatalogo().subscribe((datiCatalogo) => {
      this.datiCatalogo = datiCatalogo;
      const risultati = this.datiCatalogo.filter(
        (element) => element.nome === this.categoriaSelezionata
      );
      // controllo i risultati: nel primo elemento devo trovare i prodotti
      this.prodottiCategoria = risultati?.length > 0 ? risultati[0].prodotti : [];
      this.catalogoService.completaProdotti(this.prodottiCategoria).subscribe((datiCompleti: any[]) => {
        this.prodottiCategoria = datiCompleti;
      });

      console.log("PRODOTTI CATEGORIA: ", this.prodottiCategoria);
    });
  }
  aggiungiAlCarrello(item: Prodotto | Modello) {
    // this.carrello.push(item);
    this.sharedDataService.updateCarrello(item);
    window.alert('Prodotto aggiunto al carrello')
  }

}