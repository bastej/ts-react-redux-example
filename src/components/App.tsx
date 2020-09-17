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
  onBtnClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onBtnClick}>Fetch Todos</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

const withConnect = connect(mapStateToProps, { fetchTodos });

export const App = withConnect(_App);
