import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


const routes: Routes = [

{path:'',component:LoginComponent},
 {path:'aside',loadChildren:()=> import('../asidecontent/asidecontent.module').then(m => m.AsidecontentModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginModuleRoutingModule { }
