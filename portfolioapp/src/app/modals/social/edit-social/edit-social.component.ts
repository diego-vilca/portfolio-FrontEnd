import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Social } from 'src/app/entities/social';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-edit-social',
  templateUrl: './edit-social.component.html',
  styleUrls: ['./edit-social.component.css']
})
export class EditSocialComponent {
  //Uso el form solo para validar
  formulario : FormGroup;
  //traigo mi objeto a editar desde la clase padre
  @Input() red : Social;

  constructor(private formBuilder : FormBuilder,
              private datos : SocialService,
              private router : Router,
              private route : ActivatedRoute ) {

    this.formulario = this.formBuilder.group({
      iconoFA : [''],
      color : [''],
      urlRed : ['']
    })

    this.red  = Object();
  }


  onEnviar(event : Event){
    event.preventDefault;
    if (this.formulario.valid) {
      this.agregarRedSocial();
      alert("Red social modificada exitosamente.");
      window.location.reload();
    } else {
      alert("Error, la red social no pudo modificarse.");
    }
  }

  agregarRedSocial() : void{
    this.datos.agregarRed(this.red, 1).subscribe();
  }

  reloadPage(){
    window.location.reload();
  }

  reloadCurrent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route})
  }
}
