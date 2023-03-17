import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../entities/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url : string = 'http://localhost:8080/job/';

  constructor(
    private http : HttpClient
  ) { }


  //ALTA
  public agregarExperiencia(experiencia : Experiencia, idPersona : number) : Observable<any>{
    return this.http.post<any>(this.url + 'create/'+`${idPersona}`, experiencia);
  }

  //MOSTRAR
  public verExperiencias() : Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url + 'list');
  }
  //BUSCAR
  public buscarExperiencia(id : number) : Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + `${id}`);
  }
  //BAJA
  public borrarExperiencia(id : number) : Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
  //MODIFICACION
  public editarExperiencia(experiencia : Experiencia) : Observable<any>{
    return this.http.put<any>(this.url + 'update', experiencia);
  }

  //=====================================================================

  public editarExperienciaById( id : number, empresa ?: string, funcion ?: string,
                            anioIngreso ?: string, anioEgreso ?: string, urlEmpresa ?: string){
    let cadena : string = "";

    if (typeof empresa !== undefined) {
      cadena += ("empresa="+empresa);
    }

    if (typeof funcion !== undefined) {
      if(cadena === ""){
        cadena += ("funcion="+funcion);
      }else{
        cadena += ("&funcion="+funcion);
      }
    }

    if (typeof anioIngreso !== undefined) {
      if(cadena === ""){
        cadena += ("anioIngreso="+anioIngreso);
      }else{
        cadena += ("&anioIngreso="+anioIngreso);
      }
    }

    if (typeof anioEgreso !== undefined) {
      if(cadena === ""){
        cadena += ("anioEgreso="+anioEgreso);
      }else{
        cadena += ("&anioEgreso="+anioEgreso);
      }
    }

    if (typeof urlEmpresa !== undefined) {
      if(cadena === ""){
        cadena += ("anioEgreso="+urlEmpresa);
      }else{
        cadena += ("&anioEgreso="+urlEmpresa);
      }
    }


    return this.http.put<any>(this.url + `update/${id}?`+cadena, {});

  }

}
