import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialService } from 'src/app/services/social.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-create-social',
  templateUrl: './create-social.component.html',
  styleUrls: ['./create-social.component.css']
})
export class CreateSocialComponent {
  formulario : FormGroup;

  constructor(  private formBuilder : FormBuilder,
                private datos : SocialService) {

    this.formulario = this.formBuilder.group({
      iconoFA : ['',[Validators.required]],
      color : ['',[Validators.required]],
      urlRed : ['',[Validators.required]]
    })

  }


  onEnviar(event : Event){
    event.preventDefault;

    if (this.formulario.valid) {
      this.agregarRed();
      alert("Red social agregada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, la red social no pudo agregarse. Por favor, complete los campos correctamente.");
    }
  }

  agregarRed() : void{
    this.datos.agregarRed(this.formulario.value, environment.idPersona).subscribe();
  }

  limpiarForm() : void{
    this.formulario.reset();
  }

  get IconoFA(){
    return this.formulario.get("iconoFA");
  }

  get Color(){
    return this.formulario.get("color");
  }

  get UrlRed(){
    return this.formulario.get("urlRed");
  }


}
