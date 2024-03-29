import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/entities/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {
  //Uso el form solo para validar
  formulario : FormGroup;
  //traigo mi objeto a editar desde la clase padre
  @Input() habilidad : Habilidad;

  constructor(private formBuilder : FormBuilder,
              private datos : HabilidadService,
              private router : Router,
              private route : ActivatedRoute ) {

    this.formulario = this.formBuilder.group({
      nombre : ['',[Validators.required]],
      porcentaje : ['',[Validators.required]],
      tipo : ['',[Validators.required]]
    })

    this.habilidad  = Object();
  }


  onEnviar(event : Event){
    event.preventDefault;
    if (this.formulario.valid) {
      this.agregarHabilidad();
      alert("Habilidad digital modificada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, la habilidad no pudo modificarse. Por favor, complete los campos correctamente.");
    }
  }

  agregarHabilidad() : void{
    this.datos.agregarHabilidad(this.habilidad, 1).subscribe();
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

  get Porcentaje(){
    return this.formulario.get("porcentaje");
  }

  get Tipo(){
    return this.formulario.get("tipo");
  }

}
