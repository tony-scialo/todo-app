import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddTodo = '[TODO Component] Add_Todo',
  CompleteTodo = '[TODO Component] Complete_Todo'
}

export class AddTodo implements Action {
  public readonly type = ActionTypes.AddTodo;
  constructor(public payload: string) {}
}

export class CompleteTodo implements Action {
  public readonly type = ActionTypes.CompleteTodo;
  constructor(public payload: string) {}
}

export type TodoActions = AddTodo | CompleteTodo;
