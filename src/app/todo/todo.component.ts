import { State } from './../todo.state';
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
  todo$: Observable<State>;

  displayedColumns: string[] = ['id', 'todo'];

  constructor(private todoStore: Store<{ todos }>) {
    this.todo$ = todoStore.pipe(select('todos'));
  }

  ngOnInit() {}

  addTodo() {
    this.todoStore.dispatch(new AddTodo(this.newTodo));
  }
}
