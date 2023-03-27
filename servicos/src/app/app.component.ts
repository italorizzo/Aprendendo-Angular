import { UpperService } from './upper.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servicos';

  txtValor: string
  txtView: void
  upperService: UpperService

  constructor(private _upperService: UpperService){
    this.upperService = _upperService
  }
  enviar(){
    this.txtView = this.upperService.toUpper(this.txtValor)
  }
}
