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

  //metodos
  public verExperiencias() : Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url + 'list')
  }


}
