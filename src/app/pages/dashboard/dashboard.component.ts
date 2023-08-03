import { Component } from '@angular/core';
import { faCcPaypal, faFacebook, faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { categoria,  } from 'src/app/interfaces/categorie';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  fahome = faHome;
  fawhatsapp = faWhatsapp;
  faccpaypal=faCcPaypal;
  fainstagram=faInstagram;
  
  categorie: categoria[] = [];

  constructor(private commonService: CommonService) { }
  ngOnInit(): void {
    this.getAllcategorieFromCommonService();
  }
  private getAllcategorieFromCommonService() {
    this.commonService.getAllcategorie().subscribe(categorie => {
      this.categorie = categorie
      console.log(this.categorie)
    });
  }
}