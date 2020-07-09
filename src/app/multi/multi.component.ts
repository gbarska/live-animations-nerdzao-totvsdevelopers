import { Component, OnInit } from '@angular/core';
import { animateMultiState } from '../animations';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css'],
  animations: [
    animateMultiState
  ]
})
export class MultiComponent implements OnInit {
  state = 'default';
  
  constructor() { }

  ngOnInit(): void {
  }

toggle(){
  this.state = this.state == 'default' ? 'animated' : 'default';
  console.log('state', this.state);
}

}
