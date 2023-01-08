import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url:string = "https://youtube.com"
  

  urlImagem:string = "https://picsum.photos/400/300"

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  pessoa:any = {
    nome:'Ítalo',
    idade: 15
  }
  
  nome: any="abc"
  
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  
  onMudouValor(evento: any){
    console.log(evento)
  }

  salvar(){
    this.valorSalvo = this.valorAtual
  }

}
