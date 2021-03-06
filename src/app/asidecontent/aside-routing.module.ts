import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsideComponent } from './aside.component';



const routes: Routes = [
    {path:'',component:AsideComponent,
    children:[
    {path:'',loadChildren:()=>import('../dhash-board/dhash-board.module').then(m => m.DhashBoardModule)},
    {path:'',loadChildren:() => import('../create-question/create-question.module').then(m => m.CreateQuestionModule)},
    {path:'',loadChildren:()=> import('../user/user.module').then(m => m.UserModule) },
    {path:'',loadChildren:()=> import('../test/test.module').then(m => m.TestModule) },
    {path:'',loadChildren:()=> import('../report/report.module').then(m => m.ReportModule)},
    {path:'',loadChildren:()=> import('../theme-setting/theme-setting.module').then(m => m.ThemeSettingModule)}
  ]
  },  
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsideRoutingModule { }
