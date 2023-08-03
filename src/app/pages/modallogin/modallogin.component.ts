import { Component } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modallogin.component.html',
  styleUrls: ['./modallogin.component.scss']
})
export class ModalLoginComponent {
  credenziali: any = {};
  facirclexmark = faCircleXmark
  constructor(private commonService: CommonService) { }


  onClick() {
    this.commonService.login(this.credenziali).subscribe(res => {
      if (res.id) {
        localStorage.setItem('Token', JSON.stringify(res));
        alert('Accesso effettuato con successo') }

    })
    

  }

}
