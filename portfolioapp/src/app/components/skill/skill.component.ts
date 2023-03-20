import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/entities/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  isLogged : boolean = false;
  habilidades : Habilidad[] = [];
  habilidad : Habilidad = Object();

  constructor(
    private datos : HabilidadService,
    private tokenService : TokenService
  ){}


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarHabilidades();
  }

  cargarHabilidades() : void {
    this.datos.verHabilidades().subscribe( data => {
      this.habilidades = data;
    })
  }

  pasarHabilidad(habilidad : Habilidad) : void{
    this.habilidad = habilidad;
  }

}
