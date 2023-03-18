import { Component, Input } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent {
//id del elemento a eliminar
@Input() idEliminar : any;

constructor(
  private datos : ProyectoService
) {}

eliminarProyecto() : void{
  this.datos.borrarProyecto(this.idEliminar).subscribe();
  alert("Proyecto eliminado exitosamente.");
  window.location.reload();
}
}
