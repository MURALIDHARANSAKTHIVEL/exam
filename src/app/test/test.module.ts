import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { MakeTestComponent } from './make-test/make-test.component';
import { TestSettingComponent } from './test-setting/test-setting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material';
import{AngularDateTimePickerModule} from 'angular2-datetimepicker';
import { ManageTestComponent } from './manage-test/manage-test.component'

@NgModule({
  declarations: [MakeTestComponent, TestSettingComponent, ManageTestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    AngularDateTimePickerModule
  ],
  exports:[AngularDateTimePickerModule]
})
export class TestModule { }
