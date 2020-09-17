import { Todo, ActionTypes, TodoAction } from "../actions";

export const todosReducers = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
