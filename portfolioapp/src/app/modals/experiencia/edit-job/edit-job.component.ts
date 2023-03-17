import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit{

  form : FormGroup;

  constructor( private formBuilder : FormBuilder, datos : ExperienciaService ) {
    this.form = this.formBuilder.group({
      empresa : ['',[Validators.required]],
      funcion : ['',[Validators.required]],
      anioIngreso : ['',[Validators.required]],
      anioEgreso : [''],
      urlEmpresa : ['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  }


  onEnviar(event : Event){

  }

}
