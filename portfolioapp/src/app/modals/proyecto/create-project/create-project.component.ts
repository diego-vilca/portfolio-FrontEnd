import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  formulario : FormGroup;

  constructor(  private formBuilder : FormBuilder,
                private datos : ProyectoService) {

    this.formulario = this.formBuilder.group({
      nombre : ['',[Validators.required]],
      descripcion : ['',[Validators.required]],
      urlImg : [''],
      urlVideo : [''],
      urlRepositorio : ['',[Validators.required]],
    })

  }


  onEnviar(event : Event){
    event.preventDefault;

    if (this.formulario.valid) {
      this.agregarProyecto();
      alert("Proyecto agregada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, el proyecto no pudo agregarse. Por favor, complete los campos correctamente.");
    }
  }

  agregarProyecto() : void{
    this.datos.agregarProyecto(this.formulario.value, 1).subscribe();
  }

  limpiarForm() : void{
    this.formulario.reset();
  }


  get Nombre(){
    return this.formulario.get("nombre");
  }

  get Descripcion(){
    return this.formulario.get("descripcion");
  }

  get UrlRepositorio(){
    return this.formulario.get("urlRepositorio");
  }
}
