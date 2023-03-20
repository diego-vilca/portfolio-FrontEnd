import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/entities/social';
import { PersonaService } from 'src/app/services/persona.service';
import { SocialService } from 'src/app/services/social.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  isLogged = false;
  nombre: string = "";
  apellido: string = "";
  img_perfil : string = "";
  img_banner : string = "";
  redes : Social[] = [];
  red : Social = Object();

  constructor(
    private personaService : PersonaService,
    private redesService : SocialService,
    private tokenService : TokenService
  ){}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarPersona();
    this.cargarRedes();
  }

  cargarPersona(){
    this.personaService.buscarPersona(1).subscribe(data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.img_perfil = data.urlPerfilImg;
      this.img_banner = data.urlBannerImg;
    })
  }

  cargarRedes(){
    this.redesService.verRedes().subscribe( data => {
      this.redes = data;
    })
  }

  pasarRed(red : Social){
    this.red= red;
  }

}
