import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form : FormGroup;

  constructor( private formBuilder : FormBuilder ){
    this.form = this.formBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  //Getters
  get Email(){
    return this.form.get("email");
  }

  get Password(){
    return this.form.get("password");
  }


  //Propiedades
  get PasswordInvalid(){
    return this.Password?.errors && this.Password?.touched;
  }

  get PasswordValid(){
    return !this.Password?.errors && this.Password?.touched;
  }

  get EmailInvalid(){
    return this.Email?.errors && this.Email?.touched;
  }

  get EmailValid(){
    return !this.Email?.errors && this.Email?.touched;
  }

  onEnviar(event: Event) {
    // console.log("me mande");
    event.preventDefault;

    if(this.form.valid){
      alert("TODO OK!");
    }else {
      this.form.markAllAsTouched();
      alert("TODO MAAAAAAAAAAAL!");
    }
  }

}
