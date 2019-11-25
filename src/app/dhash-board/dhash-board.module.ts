import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DhashBoardRoutingModule } from './dhash-board-routing.module';
import { DhashBoardComponent } from './dhash-board.component';


@NgModule({
  declarations: [DhashBoardComponent],
  imports: [
    CommonModule,
    DhashBoardRoutingModule
  ]
})
export class DhashBoardModule { }
