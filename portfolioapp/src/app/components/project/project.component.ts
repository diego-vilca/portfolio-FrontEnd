import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Proyecto } from 'src/app/entities/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{

  proyectos : Proyecto[] = [];
  iFrameUrl = this.sanitizer;
  idProyecto ?: number;

  constructor(
    private datos : ProyectoService,
    private sanitizer : DomSanitizer
  ){}

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos(){
    this.datos.verProyectos().subscribe( data => {
      this.proyectos = data;
    })
  }

  pasarId(proyecto : Proyecto){
    this.idProyecto= proyecto.idProyecto;
  }

}
