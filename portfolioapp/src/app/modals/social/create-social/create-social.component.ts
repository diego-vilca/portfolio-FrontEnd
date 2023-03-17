import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialService } from 'src/app/services/social.service';

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
      alert("Error, la red social no pudo agregarse.");
    }
  }

  agregarRed() : void{
    this.datos.agregarRed(this.formulario.value, 1).subscribe();
  }

  limpiarForm() : void{
    this.formulario.reset();
  }
}
