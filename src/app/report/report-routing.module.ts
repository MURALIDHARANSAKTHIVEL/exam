import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionReportComponent } from './collection-report/collection-report.component';


const routes: Routes = [
  {path:'reportcollection',component:CollectionReportComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
