import { Component, Input } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent {
//obtengo el elemento a eliminar
@Input() project : any;

constructor(
  private datos : ProyectoService
) {}

eliminarProyecto() : void{
  this.datos.borrarProyecto(this.project.idProyect).subscribe();
  alert("Proyecto eliminado exitosamente.");
  window.location.reload();
}
}
