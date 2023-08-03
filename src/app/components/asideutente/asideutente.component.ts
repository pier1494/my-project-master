import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-asideutente',
  templateUrl: './asideutente.component.html',
  styleUrls: ['./asideutente.component.scss']
})

export class AsideutenteComponent {
  isLogged: boolean = false;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public commonService: CommonService) {
    this.commonService.isLogged.subscribe((res) => {
      this.isLogged = res;
    });
  }


    logout() {
      localStorage.removeItem('Token');
      this.commonService.isLogged.next(false);
      this.router.navigate([''])
    }

  }
