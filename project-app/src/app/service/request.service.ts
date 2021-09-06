//Decorador
import { HttpClient } from '@angular/common/http';
//Modulos de uso en servicio
import { Injectable } from '@angular/core';
//Importamos luego la BaseUrl que vamos a utilizar
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }


  public getRequest(url:string) {
    return this.httpClient.get(`${environment.baseUrl}${url}`)
  }
 
}
