import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../entities/proyecto';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //url : string = 'http://localhost:8080/project/';
  url : string = environment.apiURL + 'project/';

  constructor(
    private http : HttpClient
  ) { }


  //ALTA
  public agregarProyecto(proyecto : Proyecto, idPersona : number) : Observable<any>{
    return this.http.post<any>(this.url + 'create/'+`${idPersona}`, proyecto);
  }
  //MOSTRAR
  public verProyectos() : Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url + 'list');
  }
  //BUSCAR
  public buscarProyecto(id : number) : Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url + `${id}`);
  }
  //BAJA
  public borrarProyecto(id : number) : Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
  //MODIFICACION
  public editarProyecto(proyecto : Proyecto) : Observable<any>{
    return this.http.put<any>(this.url + 'update', proyecto);
  }
}
