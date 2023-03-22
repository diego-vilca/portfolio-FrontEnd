import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { JwtDto } from '../entities/jwt-dto';
import { LoginUsuario } from '../entities/login-usuario';
import { NuevoUsuario } from '../entities/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = environment.apiURL + 'auth/'

  constructor(
    private httpClient : HttpClient
  ) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'new', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

}
