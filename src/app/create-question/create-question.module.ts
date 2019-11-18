import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQuestionRoutingModule } from './create-question-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { QuestioncreateComponent } from './questioncreate/questioncreate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FileUploadComponent, QuestioncreateComponent],
  imports: [
    CommonModule,
    CreateQuestionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateQuestionModule { }
