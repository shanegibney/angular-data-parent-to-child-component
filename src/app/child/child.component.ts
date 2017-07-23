import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
@Input() quantity: number = null;
@Input() data: {name: string, id: number}[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.quantity){
      this.quantity = this.quantity + 2;
    }
  }
}
