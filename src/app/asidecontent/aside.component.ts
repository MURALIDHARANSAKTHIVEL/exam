import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {


  opened=false;
  constructor(private router :Router) { }
  Idsidecontent;
  Idsidenav;
  Idbodyfont;
  IdToolbar;
  ngOnInit() {
    this.Idsidecontent="Defaultcontent";
    this.Idsidenav='Defaultsidenav';
    this.Idbodyfont='DefaultBody';
   this.IdToolbar ='DefaultToolbar';
   this.router.navigate(['login/aside/dashBoard']);
    
   
  }
  toggle()
  {
this.opened=! this.opened;
  }
}
