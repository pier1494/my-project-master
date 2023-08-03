import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { prodotti, sottocategorie } from 'src/app/interfaces/categorie';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-sottocategoria',
  templateUrl: './sottocategoria.component.html',
  styleUrls: ['./sottocategoria.component.scss']
})
export class SottocategoriaComponent implements OnInit {
  prodottiFiltrati: any[] = [];
  sottocategoria: sottocategorie | null = null; // Cambia il nome della variabile

  constructor(private route: ActivatedRoute, private catalogoService: CatalogoService) { }

  ngOnInit(): void {
    // Ottieni il parametro 'sottocategoria' dalla URL
    this.route.paramMap.subscribe(params => {
      console.log("SOTTOCATEGORIA CON PARAMETRI", params);
      const sottocategoriaSelezionata = params.get('sottocategoria');
      if (sottocategoriaSelezionata) {
        // Recupera i dati della sottocategoria dal servizio e assegna i dati alla variabile 'sottocategoriaData'
        this.catalogoService.getProdottiPerSottocategoria(sottocategoriaSelezionata).subscribe(
          (sottocategoriaData: any) => {
            this.prodottiFiltrati = sottocategoriaData; // Assegna i dati della sottocategoria restituiti dal servizio alla variabile
          },
          (error) => {
            console.log('Errore durante il recupero della sottocategoria:', error);
          }
        );
      }
    });
    }
  }

