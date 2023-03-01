import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  educacion : any = [];

  constructor(
    private datos : DatosService
  ) {
  }

  ngOnInit(): void {
    this.datos.getDatos().subscribe( data => {
      this.educacion = data.educacion;
    })
  }


}
