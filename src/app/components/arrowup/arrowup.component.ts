import { Component, HostListener } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-arrowup',
  templateUrl: './arrowup.component.html',
  styleUrls: ['./arrowup.component.scss']
})
export class ArrowupComponent {
  faarrowUp=faArrowUp


showButton = false;
@HostListener('window:scroll',['$evnt'])
metodarrowup() {
  if (window.scrollY> 100){
    this.showButton = true;
  }
  else{
    this.showButton = false;
  }
}
  topFunction() {
    window.scrollTo(0, 0);
  }
}

