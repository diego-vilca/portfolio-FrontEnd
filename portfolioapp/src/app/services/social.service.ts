import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Social } from '../entities/social';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  url : string = environment.apiURL + 'social/';

  constructor(
    private http : HttpClient
  ) { }


  //ALTA
  public agregarRed(red : Social, idPersona : number) : Observable<any>{
    return this.http.post<any>(this.url + 'create/'+`${idPersona}`, red);
  }
  //MOSTRAR
  public verRedes() : Observable<Social[]>{
    return this.http.get<Social[]>(this.url + 'list');
  }
  //BUSCAR
  public buscarRed(id : number) : Observable<Social>{
    return this.http.get<Social>(this.url + `${id}`);
  }
  //BAJA
  public borrarRed(id : number) : Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
  //MODIFICACION
  public editarRed(red : Social) : Observable<any>{
    return this.http.put<any>(this.url + 'update', red);
  }
}
