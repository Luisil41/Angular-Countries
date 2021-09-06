import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesCardComponent } from './components/countries-view/countries-card/countries-card.component';
import { CountriesViewComponent } from './components/countries-view/countries-view.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
