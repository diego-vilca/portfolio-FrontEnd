import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{

  proyectos : any = [];
  iFrameUrl = this.sanitizer;

  constructor(
    private datos : DatosService,
    private sanitizer : DomSanitizer
  ){}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.proyectos = data.proyectos;
    })
  }

}
