import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../entities/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url : string = 'https://portfolio-backend-wo8y.onrender.com/person/';

  constructor(
    private http : HttpClient
  ) { }


  //ALTA
  public agregarPersona(persona : Persona) : Observable<any>{
    return this.http.post<any>(this.url + 'create', persona);
  }
  //MOSTRAR
  public verPersonas() : Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url + 'list');
  }
  //BUSCAR
  public buscarPersona(id : number) : Observable<Persona>{
    return this.http.get<Persona>(this.url + `${id}`);
  }
  //BAJA
  public borrarPersona(id : number) : Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
  //MODIFICACION
  public editarPersona(persona : Persona) : Observable<any>{
    return this.http.put<any>(this.url + 'update', persona);
  }

}

