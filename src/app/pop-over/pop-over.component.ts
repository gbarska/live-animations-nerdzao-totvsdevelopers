import { Component, OnInit } from '@angular/core';
import { popOverState, borderState } from '../animations';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css'],
  animations: [
    popOverState,
    borderState,
  ]
})
export class PopOverComponent implements OnInit {
  show = false;
  paragraphState = 'default';

  constructor() { }

  ngOnInit(): void {
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggleParagraphState(){
    this.paragraphState = this.paragraphState === 'default' ? 'error' : 'default';
    console.log('paragraphState',this.paragraphState);
  }

  togglePopOver(){
    this.show = !this.show;
  }
}
