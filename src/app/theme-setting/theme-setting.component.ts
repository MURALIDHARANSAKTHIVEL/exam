import { Component, OnInit } from '@angular/core';
import { AsideComponent } from '../asidecontent/aside.component';

@Component({
  selector: 'app-theme-setting',
  templateUrl: './theme-setting.component.html',
  styleUrls: ['./theme-setting.component.scss']
})
export class ThemeSettingComponent implements OnInit {

  constructor(private aside:AsideComponent) { }


  ngOnInit() {
   
  }
  fontclass;
  
  font(classname)
  {
this.aside.Idbodyfont=classname;
  }

  sidenavTheme(theme)
  {
this.aside.Idsidenav=theme;
  }

  Toolbartheme(theme)
  {
    this.aside.IdToolbar=theme;
  }
}



 
