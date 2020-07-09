import { Component, OnInit } from '@angular/core';
import { photoState } from '../animations';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  animations: [
    photoState
  ]
})
export class PhotoGalleryComponent implements OnInit {
  position: string;

  constructor() { }

  ngOnInit(): void {
  }

  changePosition(newPosition: string){
    this.position = newPosition;
  }

}
