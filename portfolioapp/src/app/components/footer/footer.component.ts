import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/entities/social';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit{

  redes : Social[] = [];

  constructor(
    private datos : SocialService
  ){}

  ngOnInit(): void {
    this.cargarRedes();
  }

  cargarRedes(){
    this.datos.verRedes().subscribe( data => {
      this.redes = data;
    })
  }

}

