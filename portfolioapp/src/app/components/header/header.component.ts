import { Component} from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged : boolean = false;

  constructor(
    private tokenService : TokenService
  ){}

  setIsLogged(e : boolean){
    this.isLogged = e;
  }

  //pendiente: deberia llamarlo desde componente login
  onLogOut(){
    this.tokenService.logOut();
    window.location.reload();
  }

}
