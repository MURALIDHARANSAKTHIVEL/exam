import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside.component';
import { AsideRoutingModule } from './aside-routing.module';
import {

MatButtonToggleModule,
MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatMenuModule,

  

 
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';



const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatMenuModule,

 

];


@NgModule({
  declarations: [AsideComponent],
  imports: [
    CommonModule,
    material,
    AsideRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule
  
 
  ],
  exports:[material],
  providers:[]
})
export class AsidecontentModule { }
