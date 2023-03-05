import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit{

  redes : any = [];

  constructor(
    private datos : DatosService
  ){}

  ngOnInit(): void {
    this.datos.getDatos().subscribe( data => {
      this.redes = data.redes;
    })
  }

}

