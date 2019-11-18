import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeuserComponent } from './makeuser/makeuser.component';
import { ManageuserComponent } from './manageuser/manageuser.component';


const routes: Routes = [

  {path:'makeuser',component:MakeuserComponent},
  {path:'aside/makeuser',component:MakeuserComponent},
  {path:'manageuser',component:ManageuserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
