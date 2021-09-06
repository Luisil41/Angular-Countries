import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorRegionComponent } from './por-region/por-region.component';
import { RegionesRoutingModule } from './regiones-routing.module';



@NgModule({
  declarations: [
    PorRegionComponent
  ],
  exports: [
    PorRegionComponent,
  ],
  imports: [
    CommonModule,
    RegionesRoutingModule,
    FormsModule
  ]
})
export class RegionesModule { }
