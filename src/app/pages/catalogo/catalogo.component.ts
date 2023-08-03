// import { Component, OnInit } from '@angular/core';
// import { categoria, prodotti } from 'src/app/interfaces/categorie';
// import { CatalogoService } from 'src/app/services/catalogo.service';

// @Component({
//   selector: 'app-catalogo',
//   templateUrl: './catalogo.component.html',
//   styleUrls: ['./catalogo.component.scss']
// })
// export class CatalogoComponent implements OnInit {
//   datiCatalogo: categoria[] = [];
//   categoriaSelezionata: string = '';
//   prodottiCategoria: prodotti[] = [];

//   constructor(private catalogoService: CatalogoService) { }

//   ngOnInit(): void {
//     this.catalogoService.getDatiCatalogo().subscribe((data) => {
//       this.datiCatalogo = data;
//     });
//     this.categoriaSelezionata = localStorage.getItem('categoriaSelezionata') || '';
//     if (this.categoriaSelezionata) {
//       this.getDatiCatalogoFromCatalogoService();
//     }
//   }

//   cambiaCategoria(categoria: string): void {
//     this.categoriaSelezionata = categoria;
//     this.getDatiCatalogoFromCatalogoService();
//   }

//   private getDatiCatalogoFromCatalogoService() {
//     const categoriaSelezionata = this.datiCatalogo.find((element) => element.nome === this.categoriaSelezionata);
//     this.prodottiCategoria = categoriaSelezionata ? categoriaSelezionata.prodotti : [];
//     console.log(this.prodottiCategoria);
//   }







// }
