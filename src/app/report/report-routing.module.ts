import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionReportComponent } from './collection-report/collection-report.component';
import { ViewreportComponent } from './viewreport/viewreport.component';


const routes: Routes = [
  {path:'reportcollection',component:CollectionReportComponent},


  {path:'reportCollection/viewreport',component:ViewreportComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
