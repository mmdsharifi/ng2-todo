import { Todo } from '../todo';
import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class TodoListItemComponent implements OnInit {

  @Input()
  public todo: Todo

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  toggleComplete : EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo)
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

}
