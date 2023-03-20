import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/services/habilidad.service';


@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent {
  formulario : FormGroup;

  constructor(  private formBuilder : FormBuilder,
                private datos : HabilidadService) {

    this.formulario = this.formBuilder.group({
      nombre : ['',[Validators.required]],
      porcentaje : ['',[Validators.required]],
      tipo : ['',[Validators.required]]
    })

  }


  onEnviar(event : Event){
    event.preventDefault;

    if (this.formulario.valid) {
      this.agregarHabilidad();
      alert("Habilidad digital agregada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, la habilidad no pudo agregarse. Por favor, complete los campos correctamente.");
    }
  }

  agregarHabilidad() : void{
    this.datos.agregarHabilidad(this.formulario.value, 1).subscribe();
  }

  limpiarForm() : void{
    this.formulario.reset();
  }

  get Nombre(){
    return this.formulario.get("nombre");
  }

  get Porcentaje(){
    return this.formulario.get("porcentaje");
  }

  get Tipo(){
    return this.formulario.get("tipo");
  }

}
