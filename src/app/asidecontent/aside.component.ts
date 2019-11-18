import { Component, OnInit } from '@angular/core';
import 'hammerjs';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {


  opened=false;
  constructor() { }

  ngOnInit() {
  }
  toggle()
  {
this.opened=! this.opened;
  }
}
