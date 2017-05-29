import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {

    it('should reurn an empty array by default', inject( [TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
     }));

    it('should return all todos', inject( [TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false})
      let todo2 = new Todo({title: 'Hello 2', complete: false})
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2])
    }));

  
  });

describe('#saveTodo()', () => {

    it('should automaticly assing an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false})
      let todo2 = new Todo({title: 'Hello 2', complete: false})
      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getTodoById(1)).toEqual(todo1)
      expect(service.getTodoById(2)).toEqual(todo2)
    }));
  });

describe('#deleteTodoById(id)', () => {
  it('should remove todo with corresponding id', inject( [TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false})
      let todo2 = new Todo({title: 'Hello 2', complete: false})
      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2])
  }));
});
describe('#updateTodoById(id, values)', () => {
  it('should return null id todo is not found', inject([TodoDataService], (service: TodoDataService) => {
    let todo = new Todo({title: 'Hello 1', complete: false});
    service.addTodo(todo);
    let updatedTodo = service.updateTodoById(2, {
      title: 'hey!'
    });
    expect(updatedTodo).toEqual(null);
  }));

});
describe('#toggleTodoComplete(todo)', () => {
  it('should return the updated todo with invese complete status', inject([TodoDataService], (service: TodoDataService) => {
    let todo = new Todo({title: 'Hello', complete: false});
    service.addTodo(todo);

    let updatedTodo = service.toggleComplete(todo);
    expect(updatedTodo.complete).toEqual(true);
    service.toggleComplete(todo);
    expect( updatedTodo.complete).toEqual(false);
  }));

});

});


