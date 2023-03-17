import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//servicio de prueba, levanta un json
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(
    private http : HttpClient
  ) { }

  getDatos() : Observable<any>{
    return this.http.get('./assets/db/datos.json');
  }
}
