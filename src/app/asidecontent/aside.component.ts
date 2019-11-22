import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { FileUploadComponent } from '../create-question/file-upload/file-upload.component';
import { ThemeSettingComponent } from '../theme-setting/theme-setting.component';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {


  opened=false;
  constructor() { }
  Idsidecontent;
  Idsidenav;
  bodyfont;
  ngOnInit() {

    this.Idsidecontent="Defaultcontent";
    this.Idsidenav='Defaultsidenav';
    this.bodyfont='DefaultBody';
    
    
  }
  toggle()
  {
this.opened=! this.opened;
  }
}
