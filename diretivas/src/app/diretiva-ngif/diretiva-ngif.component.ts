import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent {
  cursos: string[] = ['bom dia', 'como vai você?']
  mostrarCursos: boolean = false
  mostar(){
    this.mostrarCursos = !this.mostrarCursos
  }
}
