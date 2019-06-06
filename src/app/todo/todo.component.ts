import { State } from './../todo.state';
import { AddTodo, CompleteTodo } from './../todo.action';
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
  state$: Observable<State>;
  displayedColumns: string[] = ['todo', 'completed'];

  constructor(private todoStore: Store<{ State }>) {
    this.state$ = todoStore.pipe(select('todos'));
  }

  ngOnInit() {}

  addTodo() {
    this.todoStore.dispatch(new AddTodo(this.newTodo));
  }

  completeTodo(todo: string) {
    this.todoStore.dispatch(new CompleteTodo(todo));
  }
}
