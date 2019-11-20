import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportRoutingModule } from './report-routing.module';
import { CollectionReportComponent } from './collection-report/collection-report.component';
import { ViewreportComponent } from './viewreport/viewreport.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [CollectionReportComponent, ViewreportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    NgbModule
  ]
})
export class ReportModule { }
