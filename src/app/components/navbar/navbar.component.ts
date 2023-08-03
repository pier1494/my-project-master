import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFacebook, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faHome } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';

import { categoria, prodotti } from 'src/app/interfaces/categorie';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faHome = faHome;
  faUser = faUser;
  faCartShopping = faCartShopping;

  isLogged: boolean = false;
  datiCatalogo: categoria[] = [];
  categoriaSelezionata: string = '';
  prodottiCategoria: prodotti[] = [];
  categoria: categoria[] = [];
  
  
  constructor(private catalogoService: CatalogoService,
    private router: Router,
    public commonService: CommonService) {
    this.commonService.isLogged.subscribe((res) => {
      this.isLogged = res;
    });
  }
 
  ngOnInit(): void {
    this.catalogoService.getDatiCatalogo().subscribe((data) => {
      this.datiCatalogo = data;
    });

    // if (this.categoriaSelezionata) {
    //   this.getDatiCatalogoFromCatalogoService()

    //   this.isLogged = !!localStorage.getItem('Token');
    // }
  }

  // onClick() {
  //   this.router.navigateByUrl('products');
  // }


  
  cambiaPagina() {
    this.router.navigate(['pagina']);
  }

  logout() {
    localStorage.removeItem('Token');
    this.commonService.isLogged.next(false);
    alert('Logout effettuato con successo, a presto!')
  }


  goToCategoriaSelezionata(categoriaSelezionata: string): void {
    // metodo di salvataggio di un parametro (in questo caso il nome della categoria) tramite localstorage
   localStorage.setItem('categoriaSelezionata', categoriaSelezionata);
    // passaggio del dato in maniera tradizionale tramite url
    this.router.navigateByUrl(`/catalogo/${categoriaSelezionata}`);
    this.catalogoService.refresh.next(categoriaSelezionata);
  }

}

  // private getDatiCatalogoFromCatalogoService() {
  //   this.catalogoService.getDatiCatalogo().subscribe((datiCatalogo) => {
  //     this.datiCatalogo = datiCatalogo;
  //     this.categoriaSelezionata = this.datiCatalogo.filter(
  //       (element) => element.nome === this.categoriaSelezionata
  //     )[0].prodotti;
  //     console.log(this.categoriaSelezionata);
  //   });
  // }}
