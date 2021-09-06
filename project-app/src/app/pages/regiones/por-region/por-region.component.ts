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

  searchCountry(){
    this.hayError = false;
    console.log(this.region);

    this.regionesService.searchCountry(this.region)
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


