import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../entities/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url : string = 'https://portfolio-backend-wo8y.onrender.com/education/';

  constructor(
    private http : HttpClient
  ) { }


  //ALTA
  public agregarEducacion(estudio : Educacion, idPersona : number) : Observable<any>{
    return this.http.post<any>(this.url + 'create/'+`${idPersona}`, estudio);
  }
  //MOSTRAR
  public verEducacion() : Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url + 'list');
  }
  //BUSCAR
  public buscarEducacion(id : number) : Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `${id}`);
  }
  //BAJA
  public borrarEducacion(id : number) : Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
  //MODIFICACION
  public editarEducacion(estudio : Educacion) : Observable<any>{
    return this.http.put<any>(this.url + 'update', estudio);
  }
}
