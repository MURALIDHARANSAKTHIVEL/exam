import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { QuestioncreateComponent } from './questioncreate/questioncreate.component';


const routes: Routes = [

  {path:'fileupload',component:FileUploadComponent},
  {path:'makeQuest',component:QuestioncreateComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQuestionRoutingModule { }
