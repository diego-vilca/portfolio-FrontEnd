import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../entities/habilidad';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  url : string = environment.apiURL + 'skill/';

  constructor(
    private http : HttpClient
  ) { }


  //ALTA
  public agregarHabilidad(habilidad : Habilidad, idPersona : number) : Observable<any>{
    return this.http.post<any>(this.url + 'create/'+`${idPersona}`, habilidad);
  }
  //MOSTRAR
  public verHabilidades() : Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.url + 'list');
  }
  //BUSCAR
  public buscarHabilidad(id : number) : Observable<Habilidad>{
    return this.http.get<Habilidad>(this.url + `${id}`);
  }
  //BAJA
  public borrarHabilidad(id : number) : Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
  //MODIFICACION
  public editarHabilidad(habilidad : Habilidad) : Observable<any>{
    return this.http.put<any>(this.url + 'update', habilidad);
  }
}
