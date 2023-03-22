import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {

  formulario : FormGroup;

  constructor(  private formBuilder : FormBuilder,
                private datos : ExperienciaService) {

    this.formulario = this.formBuilder.group({
      empresa : ['',[Validators.required]],
      funcion : ['',[Validators.required]],
      anioIngreso : [''],
      anioEgreso : [''],
      urlEmpresa : [''],
    })

  }


  onEnviar(event : Event){
    event.preventDefault;

    if (this.formulario.valid) {
      this.agregarExperiencia();
      alert("Experiencia laboral agregada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, la experiencia no pudo agregarse. Por favor, complete los campos correctamente.");
    }
  }

  agregarExperiencia() : void{
    this.datos.agregarExperiencia(this.formulario.value, environment.idPersona).subscribe();
  }

  resetForm() : void{
    this.formulario.reset();
  }

  get Empresa(){
    return this.formulario.get("empresa");
  }

  get Funcion(){
    return this.formulario.get("funcion");
  }
}
