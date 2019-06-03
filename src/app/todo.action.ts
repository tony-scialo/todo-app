import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddTodo = '[TODO Component] Add_Todo',
  RemoveTodo = '[TODO Component] Remove_Todo'
}

export class AddTodo implements Action {
  public readonly type = ActionTypes.AddTodo;
  constructor(public payload: string) {}
}

export class RemoveTodo implements Action {
  public readonly type = ActionTypes.RemoveTodo;
  constructor(public payload: string) {}
}

export type TodoActions = AddTodo | RemoveTodo;
