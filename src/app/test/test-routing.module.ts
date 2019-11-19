import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeTestComponent } from './make-test/make-test.component';
import { TestSettingComponent } from './test-setting/test-setting.component';
import { ManageTestComponent } from './manage-test/manage-test.component';


const routes: Routes = [

{path:'maketest',component:MakeTestComponent},
{path:'testsetting',component:TestSettingComponent},
{path:'manageTest',component:ManageTestComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
