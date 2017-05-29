import { Output, EventEmitter} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  @Output()
  add: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  newTodo: Todo = new Todo();

  

  ngOnInit() {
  }

  addTodo () {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
