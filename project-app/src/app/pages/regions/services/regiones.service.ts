import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Country } from '../models/region-interface';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {
  searchCapital(region: string) {
    throw new Error('Method not implemented.');
  }

  private weatherUrl:string = 'https://restcountries.eu/rest/v2'

  constructor(private httpClient: HttpClient) { }

  searchCountry(region:string):Observable<Country[]> {

    const url = `${this.weatherUrl}/name/${ region }`;

      return this.httpClient.get<Country[]>(url);
  }

  findCapital(region:string): Observable<Country[]> {

    const url = `${this.weatherUrl}/capital/${ region }`;

      return this.httpClient.get<Country[]>(url);
  }

  findRegion(region:string): Observable<Country[]> {

    const url = `${this.weatherUrl}/region/${ region }`;

      return this.httpClient.get<Country[]>(url);

  }
}
