import { Component, Input } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.css']
})
export class DeleteJobComponent {
  //id del elemento a eliminar
  @Input() idEliminar : any;

  constructor(
    private datos : ExperienciaService
  ) {}

  eliminarTrabajo() : void{
    this.datos.borrarExperiencia(this.idEliminar).subscribe();
    alert("Experiencia laboral eliminada exitosamente.");
    window.location.reload();
  }

}
