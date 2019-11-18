import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsideComponent } from './asidecontent/aside.component';


const routes: Routes = [
{path:'',redirectTo:'aside',pathMatch:'full'},
{path:'aside',loadChildren:()=> import('./asidecontent/asidecontent.module').then(m => m.AsidecontentModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
