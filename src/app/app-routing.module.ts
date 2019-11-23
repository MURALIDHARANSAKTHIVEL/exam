import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsideComponent } from './asidecontent/aside.component';


const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',loadChildren:()=> import('./login-module/login-module.module').then(m => m.LoginModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
