import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  habilidades : any = [];

  constructor(
    private datos : DatosService
  ){}

  ngOnInit(): void {
    this.datos.getDatos().subscribe( data => {
      this.habilidades = data.habilidades_digitales;
    })
  }

}
