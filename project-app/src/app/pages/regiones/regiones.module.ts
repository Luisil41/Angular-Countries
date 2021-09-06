import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorRegionComponent } from './por-region/por-region.component';
import { RegionesRoutingModule } from './regiones-routing.module';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorContinenteComponent } from './por-continente/por-continente.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    PorRegionComponent,
    PorCapitalComponent,
    PorContinenteComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports: [
    PorRegionComponent,
    PorCapitalComponent,
    PorContinenteComponent
  ],
  imports: [
    CommonModule,
    RegionesRoutingModule,
    FormsModule
  ]
})
export class RegionesModule { }
