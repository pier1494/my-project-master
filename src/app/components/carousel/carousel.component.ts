import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft,  faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  faArrowRight =faArrowRight;
  faarrowright = faArrowRight;
  faArrowLeft = faArrowLeft;
  faStar = faStar;

  // Valutazione media (da 0 a 5)
  averageRating = 4; // Imposta il valore della valutazione media desiderata

  // Funzione per ottenere le stelle colorate in base alla valutazione
  getStarRating(index: number): string {
    return index <= this.averageRating ? 'checked' : 'disable';
  }
}
