export interface Todo {
  todo: string;
}

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [{ todo: 'Call Mom' }]
};
