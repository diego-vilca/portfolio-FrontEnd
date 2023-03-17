import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formulario : FormGroup;

  constructor( private formBuilder : FormBuilder ){
    this.formulario = this.formBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  //Getters
  get email(){
    return this.formulario.get("email");
  }

  get password(){
    return this.formulario.get("password");
  }


  //Propiedades
  get passwordInvalid(){
    return this.password?.errors && this.password?.touched;
  }

  get passwordValid(){
    return !this.password?.errors && this.password?.touched;
  }

  get emailInvalid(){
    return this.email?.errors && this.email?.touched;
  }

  get emailValid(){
    return !this.email?.errors && this.email?.touched;
  }

  limpiarForm() : void{
    this.formulario.reset();
  }

  onEnviar(event: Event) {
    // console.log("me mande");
    event.preventDefault;

    if(this.formulario.valid){
      alert("TODO OK!");
    }else {
      this.formulario.markAllAsTouched();
      alert("TODO MAAAAAAAAAAAL!");
    }
  }


}
