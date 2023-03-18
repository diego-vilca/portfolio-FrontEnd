import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';

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
      anioIngreso : ['',[Validators.required]],
      anioEgreso : [''],
      urlImg : ['',[Validators.required]],
      urlWeb : ['',[Validators.required]],
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
      alert("Error, la nueva formacíon no pudo agregarse.");
    }
  }

  agregarEducacion() : void{
    this.datos.agregarEducacion(this.formulario.value, 1).subscribe();
  }

  limpiarForm() : void{
    this.formulario.reset();
  }

}