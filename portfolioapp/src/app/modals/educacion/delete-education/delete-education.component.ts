import { Component, Input } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-delete-education',
  templateUrl: './delete-education.component.html',
  styleUrls: ['./delete-education.component.css']
})
export class DeleteEducationComponent {
//traigo el elemento a eliminar
@Input() educacion : any;

constructor(
  private datos : EducacionService
) {}

eliminarEducacion() : void{
  this.datos.borrarEducacion(this.educacion.idEducacion).subscribe();
  alert("Formación académica eliminada exitosamente.");
  window.location.reload();
}
}
