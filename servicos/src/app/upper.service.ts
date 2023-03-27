import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpperService {

  constructor() { }
  toUpper(val){
    return val.toUpperCase()
  }
}
