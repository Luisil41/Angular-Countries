import { Component } from '@angular/core';
import { Country } from '../models/region-interface';
import { RegionesService } from '../services/regiones.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent {

  region: string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  constructor(private regionesService: RegionesService)  { }

  buscar(region: string) {
    this.hayError = false;
    this.region = region;

    this.regionesService.searchCountry(region)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;

      }, 
      (err) => {
        this.hayError = true;
        this.paises = [];
      });
    }

  }


