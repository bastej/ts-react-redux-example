import { combineReducers } from "redux";
import { Todo } from "../actions";
import { todosReducers } from "./Todos";

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducers,
});
