import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {
   
  constructor() { }
  getSimpleValue(){
    return "Simple Value";
  }
}
