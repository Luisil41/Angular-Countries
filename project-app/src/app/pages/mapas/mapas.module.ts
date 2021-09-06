import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './components/full-screen/full-screen.component';
import { MarcadoresComponent } from './components/marcadores/marcadores.component';
import { ZoomRangeComponent } from './components/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { Menu2Component } from './shared/menu2/menu2.component';


@NgModule({
  declarations: [
    MiniMapaComponent,
    FullScreenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    PropiedadesComponent,
    Menu2Component,
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
