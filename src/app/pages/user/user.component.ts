import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  isLogged = false;
  constructor(
    public router: Router,
    public commonService: CommonService
  ){}
   
  ngOnInit(){
    this.isLogged = this.commonService.isLogged?.value;
    this.commonService.isLogged.subscribe(
      // Prendiamo solo un valore e disiscriviamo l'Observable
      //take(1),
      // Mappiamo l'Observable booleano in modo da ottenere un booleano direttamente
      (isLoggedIn) => {
        console.log("PASSO DAL RISULTATO DELLA LOGIN CON ", isLoggedIn)
        this.isLogged =  isLoggedIn
      }
    );
  }


}
