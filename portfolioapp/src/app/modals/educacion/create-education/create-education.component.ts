import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css']
})
export class CreateEducationComponent {
  formulario : FormGroup;

  constructor(  private formBuilder : FormBuilder,
                private datos : EducacionService) {

    this.formulario = this.formBuilder.group({
      institucion : ['',[Validators.required]],
      titulo : ['',[Validators.required]],
      anioIngreso : [''],
      anioEgreso : [''],
      urlImg : [''],
      urlWeb : [''],
      urlCertificado : ['',[Validators.required]]
    })

  }


  onEnviar(event : Event){
    event.preventDefault;

    if (this.formulario.valid) {
      this.agregarEducacion();
      alert("Formación académica agregada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, la nueva formación no pudo agregarse. Por favor, complete los campos correctamente.");
    }
  }

  agregarEducacion() : void{
    this.datos.agregarEducacion(this.formulario.value, environment.idPersona).subscribe();
  }

  limpiarForm() : void{
    this.formulario.reset();
  }

  get Institucion(){
    return this.formulario.get("institucion");
  }

  get Titulo(){
    return this.formulario.get("titulo");
  }

  get UrlCertificado(){
    return this.formulario.get("urlCertificado");
  }

}
