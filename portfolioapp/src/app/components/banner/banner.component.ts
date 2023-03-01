import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

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
  redes : any = [];

  constructor(
    private datos : DatosService
  ){}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.img_perfil = data.url_perfil_img;
      this.img_banner = data.url_banner_img;
      this.redes = data.redes;
    })
  }


}
