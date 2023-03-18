import { Component, Input } from '@angular/core';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.css']
})
export class DeleteSkillComponent {
//id del elemento a eliminar
@Input() idEliminar : any;

constructor(
  private datos : HabilidadService
) {}

eliminarHabilidad() : void{
  this.datos.borrarHabilidad(this.idEliminar).subscribe();
  alert("Habilidad digital eliminada exitosamente.");
  window.location.reload();
}
}
