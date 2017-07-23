import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'root app';
  value: number = null;
  newvalue: number = null;

  id: number = null;
  name: string = null;
  details: {name: string, id: number}[] = [];

  constructor(){
  }

  ngOnInit(){
  }

  fun(){
    this.newvalue = this.value + 2;
  }

  pushto(){
    this.details.push({name: this.name, id: this.id});
    // this.details = [{name: this.name, id: this.id}];
    this.name = null;
    this.id = null;
  }
}
