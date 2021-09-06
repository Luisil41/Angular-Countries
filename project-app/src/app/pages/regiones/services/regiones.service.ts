import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Country } from '../models/region-interface';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  private weatherUrl:string = 'https://restcountries.eu/rest/v2'

  constructor(private httpClient: HttpClient) { }

  searchCountry(region:string):Observable<Country[]> {

    const url = `${this.weatherUrl}/name/${ region }`;

      return this.httpClient.get<Country[]>(url);
  }
}
