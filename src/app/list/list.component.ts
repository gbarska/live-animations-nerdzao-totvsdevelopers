import { Component, OnInit } from '@angular/core';
import { listPhotosAnimation } from '../animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [listPhotosAnimation]
})
export class ListComponent implements OnInit {
  photos = [
    'goku.png',
    'gohan.png',
    'goten.png',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
