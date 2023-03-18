import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/entities/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  habilidades : Habilidad[] = [];
  idHabilidad ?: number;

  constructor(
    private datos : HabilidadService
  ){}


  ngOnInit(): void {
    this.cargarHabilidades();
  }

  cargarHabilidades() : void {
    this.datos.verHabilidades().subscribe( data => {
      this.habilidades = data;
    })
  }

  pasarId(habilidad : Habilidad){
    this.idHabilidad = habilidad.idHabilidad;
  }
}
