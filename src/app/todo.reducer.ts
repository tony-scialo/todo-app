import { State, initialState } from './todo.state';
import { ActionTypes } from './todo.action';
import { TodoActions } from './todo.action';

export function todoReducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case ActionTypes.AddTodo:
      return {
        ...state,
        todos: state.todos.concat({
          id: state.todos.length,
          todo: action.payload
        })
      };
    case ActionTypes.RemoveTodo:
      return {
        ...state
      };
    default:
      return state;
  }
}
