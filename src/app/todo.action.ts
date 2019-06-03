import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddTodo = '[TODO Component] Add_Todo',
  RemoveTodo = '[TODO Component] Remove_Todo'
}

export class AddTodo implements Action {
  public readonly type = ActionTypes.AddTodo;
  constructor(readonly payload: { todo: string }) {}
}

export class AddRemove implements Action {
  public readonly type = ActionTypes.RemoveTodo;
  constructor(readonly payload: { todo: string }) {}
}
