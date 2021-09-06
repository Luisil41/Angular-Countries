import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorRegionComponent } from './por-region/por-region.component';

const routes: Routes = [
  {
    path:'',
    component: PorRegionComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionesRoutingModule { }
