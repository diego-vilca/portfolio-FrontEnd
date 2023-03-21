import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/entities/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  isLogged : boolean = false;
  educacion : Educacion[] = [];
  formacion : Educacion = Object();

  constructor(
    private datos : EducacionService,
    private tokenService : TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarEducacion();
  }

  cargarEducacion() : void {
    this.datos.verEducacion().subscribe( data => {
      this.educacion = data;
    })
  }

  pasarEducacion(educacion : Educacion) : void{
    this.formacion = educacion;
  }


}
