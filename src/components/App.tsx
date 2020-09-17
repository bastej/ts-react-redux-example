import React, { Component } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

// Functional Component typing
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

class _App extends Component<AppProps> {
  render() {
    return <div>Hi!</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

const withConnect = connect(mapStateToProps, { fetchTodos });

export const App = withConnect(_App);
