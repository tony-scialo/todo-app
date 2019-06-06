import { AddTodo } from './../todo.action';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  newTodo: string;
  $todos: Observable<string[]>;

  displayedColumns: string[] = ['id', 'todo'];
  test = [{ id: 1, todo: 'Call Mom' }, { id: 2, todo: 'Call Dad' }];

  constructor(private todoStore: Store<{ todos: string[] }>) {
    this.$todos = todoStore.pipe(select('todos'));
  }

  ngOnInit() {}

  addTodo() {
    this.todoStore.dispatch(new AddTodo(this.newTodo));
  }
}
