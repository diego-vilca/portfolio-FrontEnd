import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entities/experiencia';
import { DeleteJobComponent } from 'src/app/modals/experiencia/delete-job/delete-job.component';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {

  work_history : Experiencia[] = [];
  idTrabajo ?: number;

  constructor(
    private datos : ExperienciaService
  ){}

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  cargarExperiencia(){
    this.datos.verExperiencias().subscribe( data => {
      this.work_history = data;
    })
  }


  pasarId(experiencia : Experiencia){
    this.idTrabajo= experiencia.idExperiencia;
  }

}
