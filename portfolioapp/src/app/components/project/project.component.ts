import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Proyecto } from 'src/app/entities/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  isLogged : boolean = false;
  proyectos : Proyecto[] = [];
  iFrameUrl = this.sanitizer;
  proyecto : Proyecto = Object();

  constructor(
    private datos : ProyectoService,
    private tokenService : TokenService,
    private sanitizer : DomSanitizer
  ){}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarProyectos();
  }

  cargarProyectos(){
    this.datos.verProyectos().subscribe( data => {
      this.proyectos = data;
    })
  }

  pasarProyecto(proyecto : Proyecto){
    this.proyecto= proyecto;
  }


}
