import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  subtotale: number = 0;
  riepilogo: Array<any> = [];
  constructor(private sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    this.subtotale = this.sharedDataService.getSubtotale(); // Ottieni il subtotale dal servizio condiviso
    this.sharedDataService.updateCarrelloSubject.subscribe(res => {
      this.riepilogo = res;
    })
  }
}