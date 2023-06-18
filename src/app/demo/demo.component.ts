import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  title:string='demo'
  constructor(public simpleSev:SimpleService) { }
 
  ngOnInit(): void {
    this.simpleSev.getSimpleValue()
  }

}
