import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faStar } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-mulinelli',
  templateUrl: './mulinelli.component.html',
  styleUrls: ['./mulinelli.component.scss']
  
})

export class MulinelliComponent {
  constructor(private router: Router) { }
  faStar = faStar;

}


