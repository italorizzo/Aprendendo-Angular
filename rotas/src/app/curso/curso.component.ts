import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {
  id: string

  constructor(private route: ActivatedRoute){
    console.log(this.route)
    this.id = route.snapshot.params['id']
  }

  ngOnInit(){

  }
}
