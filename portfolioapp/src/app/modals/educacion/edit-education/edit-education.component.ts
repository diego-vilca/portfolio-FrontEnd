import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/entities/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent {
  //Uso el form solo para validar
  formulario : FormGroup;
  //traigo mi objeto a editar desde la clase padre
  @Input() educacion : Educacion;

  constructor(private formBuilder : FormBuilder,
              private datos : EducacionService,
              private router : Router,
              private route : ActivatedRoute ) {

    this.formulario = this.formBuilder.group({
      institucion : ['',[Validators.required]],
      titulo : ['',[Validators.required]],
      anioIngreso : [''],
      anioEgreso : [''],
      urlImg : [''],
      urlWeb : [''],
      urlCertificado : ['',[Validators.required]]
    })

    this.educacion  = Object();
  }


  onEnviar(event : Event){
    event.preventDefault;
    if (this.formulario.valid) {
      this.agregarEducacion();
      alert("Formación académica modificada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, la formación no pudo modificarse. Por favor, complete los campos correctamente.");
    }
  }

  agregarEducacion() : void{
    this.datos.agregarEducacion(this.educacion, 1).subscribe();
  }

  reloadPage(){
    window.location.reload();
  }

  reloadCurrent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route})
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
