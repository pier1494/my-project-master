import { Component } from '@angular/core';
import { faCcPaypal, faFacebook, faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  title = 'my-project';
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  fahome = faHome;
  fawhatsapp = faWhatsapp;
  faccpaypal=faCcPaypal;
  fainstagram=faInstagram;
    whatsappPhoneNumber: string = '+393807537713';
  
}
