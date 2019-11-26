import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { UserserviceService } from '../AppService/userservice.service';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {


  opened=false;
  constructor(private router :Router,private service : UserserviceService) { }
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
