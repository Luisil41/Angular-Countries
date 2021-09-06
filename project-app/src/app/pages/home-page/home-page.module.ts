import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeViewComponent } from './components/home-page/home-view/home-view.component';
import { HomeHeroComponent } from './components/home-page/home-view/home-hero/home-hero.component';
import { RequestService } from 'src/app/service/request.service';



@NgModule({
  declarations: [
    HomeViewComponent,
    HomeHeroComponent
    
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],

  providers: [RequestService]
})
export class HomePageModule { }
