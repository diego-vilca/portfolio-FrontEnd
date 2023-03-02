import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {

  work_history : any = [];

  constructor(
    private datos : DatosService
  ){}

  ngOnInit(): void {
    this.datos.getDatos().subscribe( data => {
      this.work_history = data.experiencia_laboral;
    })
  }

}
