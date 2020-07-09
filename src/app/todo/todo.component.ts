import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from './todo';
import { todoState } from '../animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    todoState
  ]
})
export class TodoComponent implements OnInit {
  @ViewChild('myInput') myInput: ElementRef;
  list: Todo[] = [];

  constructor() { }
  
  ngOnInit(): void {
  }
  

  onAdd(){
    const newTodo = { id: this.list.length + 1 , description: this.myInput.nativeElement.value } as Todo;
    this.list.push(newTodo);
    this.myInput.nativeElement.value = "";
  }

  onRemove(id : number){
    this.list = this.list.filter(x => x.id !== id);
  }
}
