import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Carousel } from 'bootstrap';
import { ItemCarrello, Modello, Prodotto } from 'src/app/interfaces/categorie';
import { CommonService } from 'src/app/services/common.service';
import { SharedDataService } from 'src/app/shared-data-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  isLoading = false;
  isZoomed = false;

  zoomIn() {
    this.isZoomed = true;
  }

  zoomOut() {
    this.isZoomed = false;
  }
  product: any = {
      
  };

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit() {
    // prova di forzare l'inizializzazione del carosello dal componente angular
    //const carousel = new Carousel('#carouselExampleCaptions', {});

    // questo è il modo per selezionare un parametro (id) all'avvio del componente 
    const productId = this.route.snapshot.paramMap.get('id');
    // in quest'altro modo sto rimanendo aggiornato sui cambiamenti dei parametri
    this.route.params.subscribe((valoreParametri: any) => {
      console.log("RISULTATI PAsRAMETRI", valoreParametri);
      this.aggiornaProdotto(valoreParametri.id) 
    })
    this.aggiornaProdotto(productId);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private aggiornaProdotto(productId: any){
    console.log("PRODOTTO DA VISUALIZZARE: " + productId);
    this.product.id = productId;
    this.isLoading = true;
    this.commonService.getProduct(productId).subscribe((res) => {
      this.product = res;
      this.product.id = productId;
      this.isLoading = false;
    })
  }

  /**
   * Metodo che definisce come l'Ordine viene caricato sul carrello
   */
  aggiungiAlCarrello(item: any) {
    // this.carrello.push(item);
    if (!item?.id) { // aggiunta da modello
      this.sharedDataService.updateCarrello({...this.product, ...item});
    } else {
      this.sharedDataService.updateCarrello(item);
    }
    window.alert('Prodotto aggiunto al carrello')
  }

  scegliModelli() {
    console.log("Operazione ancora da sviluppare")
  }
}
