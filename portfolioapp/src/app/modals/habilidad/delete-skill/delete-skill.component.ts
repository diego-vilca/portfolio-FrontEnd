import { Component, Input } from '@angular/core';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.css']
})
export class DeleteSkillComponent {
//traigo el elemento a eliminar
@Input() habilidad : any;

constructor(
  private datos : HabilidadService
) {}

eliminarHabilidad() : void{
  this.datos.borrarHabilidad(this.habilidad.idHabilidad).subscribe();
  alert("Habilidad digital eliminada exitosamente.");
  window.location.reload();
}
}
