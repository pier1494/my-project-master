import { Component, ElementRef, Renderer2 } from '@angular/core';
import { faFacebook, faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  fawhatsapp = faWhatsapp;



  isPopupOpen = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }


}
