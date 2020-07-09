import { Component, OnInit } from '@angular/core';
import { ListStateTrigger } from '../animations';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css'],
  animations: [
    ListStateTrigger
  ]
})
export class CallbackComponent implements OnInit {
  testResults = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddElement(){
    this.testResults.push(Math.random());
  }
  
  onStart(event: AnimationEvent){
    console.log(event);
   }
  
   onDone(event: AnimationEvent){
    console.log(event);
   }
}
