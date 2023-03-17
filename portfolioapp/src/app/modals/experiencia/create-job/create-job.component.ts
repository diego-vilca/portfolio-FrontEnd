import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';

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
      anioIngreso : ['',[Validators.required]],
      anioEgreso : [''],
      urlEmpresa : ['',[Validators.required]],
    })

  }


  onEnviar(event : Event){
    event.preventDefault;

    if (this.formulario.valid) {
      this.agregarExperiencia();
      alert("Experiencia laboral agregada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, la experiencia no pudo agregarse.");
    }
  }

  agregarExperiencia() : void{
    this.datos.agregarExperiencia(this.formulario.value, 1).subscribe();
  }

  limpiarForm() : void{
    this.formulario.reset();
  }
}
