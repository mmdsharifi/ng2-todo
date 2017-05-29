import { TodoDataService } from './todo-data.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  newTodo: Todo = new Todo();

  /**
   *
   */
  constructor(private todoDataService: TodoDataService) {
    
  }

  onAddTodo($event) {
    this.todoDataService.addTodo($event);
    this.newTodo = new Todo();
  }

  onToggleTodoComplete( todo: Todo ) {
    this.todoDataService.toggleComplete(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos()
  }
}
