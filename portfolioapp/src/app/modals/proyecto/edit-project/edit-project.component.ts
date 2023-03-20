import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/entities/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  //Uso el form solo para validar
  formulario : FormGroup;
  //traigo mi objeto a editar desde la clase padre
  @Input() project : Proyecto;

  constructor(private formBuilder : FormBuilder,
              private datos : ProyectoService,
              private router : Router,
              private route : ActivatedRoute ) {

    this.formulario = this.formBuilder.group({
      nombre : ['',[Validators.required]],
      descripcion : ['',[Validators.required]],
      urlImg : [''],
      urlVideo : [''],
      urlRepositorio : ['',[Validators.required]],
    })

    this.project  = Object();
  }


  onEnviar(event : Event){
    event.preventDefault;
    if (this.formulario.valid) {
      this.agregarProyecto();
      alert("Proyecto modificado exitosamente.");
      window.location.reload();
    } else {
      alert("Error, el proyecto no pudo modificarse. Por favor, complete los campos correctamente.");
    }
  }

  agregarProyecto() : void{
    this.datos.agregarProyecto(this.project, 1).subscribe();
  }

  reloadPage(){
    window.location.reload();
  }

  reloadCurrent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route})
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
