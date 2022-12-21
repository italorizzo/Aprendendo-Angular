import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properity.component.html',
  styleUrls: ['./output-properity.component.css']
})
export class OutputProperityComponent {
  @Input() valor: number = 0

  @Output() mudouValor: any = new EventEmitter()

  incrementa(){
    this.valor ++
    this.mudouValor.emit({novoValor: this.valor})
  }
  decrementa(){
    this.valor --
    this.mudouValor.emit({novoValor: this.valor})
  }
}
