import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesViewComponent } from './components/countries-view/countries-view.component';
import { CountriesCardComponent } from './components/countries-view/countries-card/countries-card.component';
import { RequestService } from 'src/app/service/request.service';


@NgModule({
  declarations: [
    CountriesViewComponent,
    CountriesCardComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
  providers:[RequestService],
})
export class CountriesModule { }
