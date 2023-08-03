import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categoria, prodotti, sottocategorie } from 'src/app/interfaces/categorie';
// import { SottocategoriaComponent } from 'src/app/pages/sottocategoria/sottocategoria.component';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  sottocategorie: sottocategorie[] = [];
  categoriaSelezionata: string = '';
  prodottiFiltrati: prodotti[] = [];
  SottocategoriaSelezionata: string = '';

  constructor(private catalogoService: CatalogoService, private router: Router) {}

  cambiaPagina(pagina: string) {
    this.router.navigate([pagina]
      )
  }

  // cambiaPagina(pagina: string) {
  //   if (pagina === 'mulinelli') {
  //     // Recupera i prodotti per la sottocategoria 'Mulinelli'
  //     this.catalogoService.getProdottiPerSottocategoria('Mulinelli').subscribe(
  //       (prodotti: prodotti[]) => {
  //         // Ora puoi utilizzare l'array 'prodotti' nella tua pagina o eseguire altre operazioni
  //         console.log(prodotti);
  //       },
  //       (error) => {
  //         console.log('Errore durante il recupero dei prodotti:', error);
  //       }
  //     );}}

  goToCategoriaSelezionata(categoriaSelezionata: string): void {
    // Metodo di salvataggio di un parametro (in questo caso il nome della categoria) tramite localstorage
    localStorage.setItem('sottocategoriaSelezionata', categoriaSelezionata);
    // Passaggio del dato in maniera tradizionale tramite URL
    this.router.navigate(['/sottocategoria',categoriaSelezionata]);
    this.catalogoService.refresh.next(categoriaSelezionata);
  }


  ngOnInit(): void {
    this.catalogoService.refresh.subscribe(() => {
      this.updateCategoria();
    });
  }


  updateCategoria() {
    // Recupera la categoria selezionata dal localStorage
    this.categoriaSelezionata = localStorage.getItem('categoriaSelezionata') || '';

    this.catalogoService.getAllCategorie().subscribe((categorie: categoria[]) => {
        // Ora hai tutte le categorie disponibili nel tuo array 'categorie'
        console.log(categorie);
        // cerca (find) la categoria che rispetta l'espressione di ugualianza sul nome con la categoriaSelezionata
        const datiCategoriaSelezionata = categorie.find(c => c.nome == this.categoriaSelezionata);
        this.sottocategorie = datiCategoriaSelezionata?.sottocategorie ?? [];
      });
  }

  onClickSottocategoria(sottocategoriaSelezionata: string): void {
    // Recupera i prodotti filtrati per la sottocategoria selezionata
    this.catalogoService.getProdottiPerSottocategoria(sottocategoriaSelezionata).subscribe(
      (sottocategoria: sottocategorie) => { // Cambia 'prodotti' in 'sottocategoria'
        this.prodottiFiltrati = sottocategoria.prodotti;
        // Ora puoi utilizzare l'array 'prodottiFiltrati' nel tuo componente aside
        console.log(this.prodottiFiltrati);
      },
      (error) => {
        console.log('Errore durante il recupero dei prodotti per la sottocategoria:', error);
      }
    );
  }
}
