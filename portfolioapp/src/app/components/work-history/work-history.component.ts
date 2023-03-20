import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entities/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  isLogged : boolean = false;
  work_history : Experiencia[] = [];
  experiencia : Experiencia = Object();

  constructor(
    private datos : ExperienciaService,
    private tokenService : TokenService
  ){}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarExperiencia();
  }

  cargarExperiencia(){
    this.datos.verExperiencias().subscribe( data => {
      this.work_history = data;
    })
  }

  pasarTrabajo(experiencia : Experiencia) : void{
    this.experiencia = experiencia;
  }

}
