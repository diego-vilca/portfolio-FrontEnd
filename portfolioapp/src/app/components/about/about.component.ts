import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  about_me : string = "";

  constructor(
    private datos : PersonaService
  ){}

  ngOnInit(): void {
    this.cargarAboutMe();
  }

  cargarAboutMe(){
    this.datos.buscarPersona(1).subscribe( data => {
      this.about_me = data.acercaDe;
    })
  }

}
