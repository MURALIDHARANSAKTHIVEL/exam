import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { MakeTestComponent } from './make-test/make-test.component';
import { TestSettingComponent } from './test-setting/test-setting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MakeTestComponent, TestSettingComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestModule { }
