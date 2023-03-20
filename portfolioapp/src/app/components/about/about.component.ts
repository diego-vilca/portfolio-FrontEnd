import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  isLogged : boolean = false;
  about_me : string = "";

  constructor(
    private datos : PersonaService,
    private tokenService : TokenService
  ){}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarAboutMe();
  }

  cargarAboutMe(){
    this.datos.buscarPersona(1).subscribe( data => {
      this.about_me = data.acercaDe;
    })
  }

}
