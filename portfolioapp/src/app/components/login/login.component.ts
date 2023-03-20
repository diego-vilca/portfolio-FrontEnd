import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginUsuario } from 'src/app/entities/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLogged = false;
  isLogginFail = false;
  loginUsuario !: LoginUsuario;
  nombreUsuario !: string;
  password !: string;
  roles: string[] = [];
  errMsj !: string;
  @Output() miEvento = new EventEmitter<boolean>();


  constructor(
    private tokenService : TokenService,
    private authService : AuthService){}


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    this.logueado();
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      window.location.reload();
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
  }

  logueado(){
    return this.miEvento.emit(this.isLogged);
  }


}
