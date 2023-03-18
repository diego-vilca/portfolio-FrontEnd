import { Component, Input } from '@angular/core';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-delete-social',
  templateUrl: './delete-social.component.html',
  styleUrls: ['./delete-social.component.css']
})
export class DeleteSocialComponent {
//id del elemento a eliminar
@Input() idEliminar : any;

constructor(
  private datos : SocialService
) {}

eliminarRed() : void{
  this.datos.borrarRed(this.idEliminar).subscribe();
  alert("Red social eliminada exitosamente.");
  window.location.reload();
}
}
