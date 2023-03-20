import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entities/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-nombre',
  templateUrl: './edit-nombre.component.html',
  styleUrls: ['./edit-nombre.component.css']
})
export class EditNombreComponent implements OnInit{

  formulario : FormGroup;
  persona : Persona;


  constructor(
    private formBuilder : FormBuilder,
    private datos : PersonaService) {

    this.formulario = this.formBuilder.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required]
    })

    this.persona  = Object();
  }

  ngOnInit(): void {
    this.traerPersona();
  }


  onEnviar(event : Event){
    event.preventDefault;
    if (this.formulario.valid) {
      this.editarPersona();
      alert("Persona modificada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, la persona no pudo modificarse.");
    }
  }

  traerPersona() : void{
    this.datos.buscarPersona(1).subscribe( data => {
      this.persona = data;
    })
  }


  editarPersona() : void{
    this.datos.editarPersona(this.persona).subscribe();
  }

  reloadPage(){
    window.location.reload();
  }
}
