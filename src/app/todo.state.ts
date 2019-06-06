export interface Todo {
  id: number;
  todo: string;
}

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [{ id: 1, todo: 'Call Mom' }, { id: 2, todo: 'Call Dad' }]
};
