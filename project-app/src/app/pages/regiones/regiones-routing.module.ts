import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorContinenteComponent } from './por-continente/por-continente.component';
import { PorRegionComponent } from './por-region/por-region.component';

const routes: Routes = [
  {
    path:'',
    component: PorRegionComponent
  },
  {
    path:'continente',
    component: PorContinenteComponent
  },
  {
    path:'capital',
    component: PorCapitalComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionesRoutingModule { }
