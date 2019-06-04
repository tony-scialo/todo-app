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
  $todos: Observable<string[]>;

  constructor(private todoStore: Store<{ todos: string[] }>) {
    this.$todos = todoStore.pipe(select('todos'));
  }

  ngOnInit() {
    this.addTodo();
  }

  addTodo() {
    this.todoStore.dispatch(new AddTodo('Call Dad'));
  }
}
