import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/entities/social';
import { PersonaService } from 'src/app/services/persona.service';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{

  nombre: string = "";
  apellido: string = "";
  img_perfil : string = "";
  img_banner : string = "";
  redes : Social[] = [];
  idRed ?: number;

  constructor(
    private datosP : PersonaService,
    private datosR : SocialService
  ){}

  ngOnInit(): void {
    this.cargarPersona();
    this.cargarRedes();
  }

  cargarPersona(){
    this.datosP.buscarPersona(1).subscribe(data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.img_perfil = data.urlPerfilImg;
      this.img_banner = data.urlBannerImg;
    })
  }

  cargarRedes(){
    this.datosR.verRedes().subscribe( data => {
      this.redes = data;
    })
  }

  pasarId(red : Social){
    this.idRed= red.idRed;
  }

}
