import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngfor',
  templateUrl: './diretivas-ngfor.component.html',
  styleUrls: ['./diretivas-ngfor.component.css']
})
export class DiretivasNgforComponent {
  cursos: any[] = ['angular', 'javascript', 'python']
}
