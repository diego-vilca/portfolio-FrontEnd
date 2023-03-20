import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUsuario } from 'src/app/entities/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Output() miEvento = new EventEmitter<boolean>();
  formulario : FormGroup;
  isLogged = false;
  isLogginFail = false;
  loginUsuario !: LoginUsuario;
  nombreUsuario !: string;
  password !: string;
  roles: string[] = [];
  errMsj !: string;


  constructor(
    private tokenService : TokenService,
    private authService : AuthService,
    private formBuilder : FormBuilder){

      this.formulario = this.formBuilder.group({
        nombreUsuario : ['',[Validators.required, Validators.minLength(3)]],
        password : ['',[Validators.required, Validators.minLength(3)]]
      })
    }


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    this.logueado();
  }

  onLogin(event: Event): void{

    event.preventDefault;

    if(this.formulario.valid){

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
        alert("Usuario o contraseña incorrectos, por favor intentelo nuevamente.");
      })

    }else {

      this.formulario.markAllAsTouched();
      alert("Por favor, ingrese los datos correctamente.");
    }

  }

  logueado(){
    return this.miEvento.emit(this.isLogged);
  }

  get NombreUsuario(){
    return this.formulario.get("nombreUsuario");
  }

  get Password(){
    return this.formulario.get("password");
  }

  get NombreValid(){
    return this.NombreUsuario?.touched && !this.NombreUsuario?.valid;
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  limpiarForm() : void{
    this.formulario.reset();
    // this.formulario.markAsUntouched();
  }
}
