import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Icountries } from '../../models/Icountries';


@Component({
  selector: 'app-countries-view',
  templateUrl: './countries-view.component.html',
  styleUrls: ['./countries-view.component.scss']
})
export class CountriesViewComponent implements OnInit {

  public countries: Icountries[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    
    console.log("Hola onInit");

    this.getCountries();
  }

  public getCountries(): void {
    this.requestService.getRequest('countries').subscribe((dataCountries:any) => {

      console.log("hola luis",dataCountries)

      this.countries = dataCountries; 
    })
  }
}
