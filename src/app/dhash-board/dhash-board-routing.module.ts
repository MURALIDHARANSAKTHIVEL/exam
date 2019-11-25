import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DhashBoardComponent } from './dhash-board.component';


const routes: Routes = [
{path:'dashBoard' ,component:DhashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DhashBoardRoutingModule { }
