import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/entities/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent{
  //Uso el form solo para validar
  formulario : FormGroup;
  //traigo mi objeto a editar desde la clase padre
  @Input() trabajo : Experiencia;

  constructor(private formBuilder : FormBuilder,
              private datos : ExperienciaService,
              private router : Router,
              private route : ActivatedRoute ) {

    this.formulario = this.formBuilder.group({
      empresa : ['',[Validators.required]],
      funcion : ['',[Validators.required]],
      anioIngreso : [''],
      anioEgreso : [''],
      urlEmpresa : [''],
    })

    this.trabajo  = Object();
  }


  onEnviar(event : Event){
    event.preventDefault;
    if (this.formulario.valid) {
      this.agregarExperiencia();
      alert("Experiencia laboral modificada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, la experiencia no pudo modificarse. Por favor, complete los campos correctamente.");
    }
  }

  agregarExperiencia() : void{
    this.datos.agregarExperiencia(this.trabajo, 1).subscribe();
  }

  reloadPage(){
    window.location.reload();
  }

  reloadCurrent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route})
  }

  get Empresa(){
    return this.formulario.get("empresa");
  }

  get Funcion(){
    return this.formulario.get("funcion");
  }

}
