import { Component } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slidermarchi',
  templateUrl: './slidermarchi.component.html',
  styleUrls: ['./slidermarchi.component.scss'],
})
export class SlidermarchiComponent {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  currentSlide: number = 0;
  dotHelper: Array<Number> = []
  slider: any; // Assicurati di inizializzare il riferimento al tuo keen-slider

  // Metodo per spostarsi alla slide precedente
  prevSlide(): void {
    if (this.slider) {
      this.slider.prev();
    }
  }

  // Metodo per spostarsi alla slide successiva
  nextSlide(): void {
    if (this.slider) {
      this.slider.next();
    }
  }

  // Metodo per spostarsi a una slide specifica (basato sull'indice)
  goToSlide(index: number): void {
    if (this.slider) {
      this.slider.moveToSlide(index);
    }
  }
}
