import { Component, OnInit } from '@angular/core';
import { Country } from '../models/region-interface';
import { RegionesService } from '../services/regiones.service';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styles: [`
  button{
    margin-right: 10px;
    margin-top: 5px;
    flex-wrap: wrap;
  }`  ]
})
export class PorContinenteComponent  {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string  = '';
  paises: Country[] = [];

  constructor(private regionesService: RegionesService) { }

  getClaseCSS(region: string):string { 
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string){
    this.regionActiva = region;

    this.regionesService.buscarRegion(region)
      .subscribe( paises => this.paises = paises);

    
  }

}
