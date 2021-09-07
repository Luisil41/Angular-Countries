import { Component } from '@angular/core';
import { Country } from '../models/region-interface';
import { RegionesService } from '../services/regiones.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  region: string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  constructor(private regionesService: RegionesService)  { }

  buscar(region: string) {
    this.hayError = false;
    this.region = region;

    this.regionesService.findCapital(region)
      .subscribe((paises) => {
        this.paises = paises;
      }, 
      (err) => {
        this.hayError = true;
        this.paises = [];
      });
    }

  }