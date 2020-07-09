import { Component, OnInit } from '@angular/core';
import { clickedStateTrigger } from '../animations';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css'],
  animations: [
    clickedStateTrigger
  ]
})
export class BugComponent implements OnInit {
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntered;

  ngOnInit(): void {
  }

  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }

}
