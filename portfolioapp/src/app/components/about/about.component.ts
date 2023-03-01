import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  about_me : string = "";

  constructor(
    private datos : DatosService
  ){}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(
      data => {
        this.about_me = data.acerca_de;
      }
    )
  }

}
