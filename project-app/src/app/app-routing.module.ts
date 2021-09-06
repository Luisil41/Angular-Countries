import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then (module => module.HomePageModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./pages/countries/countries.module').then (module => module.CountriesModule)
  },
  {
    path: 'regiones',
    loadChildren: () => import('./pages/regiones/regiones.module').then (module => module.RegionesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
