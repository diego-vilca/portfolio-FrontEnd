import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/entities/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  educacion : Educacion[] = [];
  idEducacion ?: number;

  constructor(
    private datos : EducacionService
  ) {}

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion() : void {
    this.datos.verEducacion().subscribe( data => {
      this.educacion = data;
    })
  }

  pasarId(educacion : Educacion){
    this.idEducacion = educacion.idEducacion;
  }

}
