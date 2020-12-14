import Todo from './Todo';
import './App.css';

import React from 'react';
import { connect } from 'react-redux';

import { showContent, getTodos, removeData } from './store/actions';

const mapDispatchToProps = dispatch => {
  return {
    showContent: show => dispatch(showContent(show)),
    getTodos: () => dispatch(getTodos()),
    removeTodos: () => dispatch(removeData())
  };
};

const mapStateToProps = state => {
  return {
    show: state.show,
    todos: state.todos
  };
};


class App extends React.Component {

  constructor(props) {
    super(props)
  }

  handleShow() {
    const newState = !this.props.show;

    this.props.showContent(newState);
  }

  loadData() {
    this.props.getTodos();
  }

  handleRemoveData() {
    this.props.removeTodos();
  }

  render() {
    return (
      <React.Fragment>
        <div className="mb-3">
          <button className="btn btn-warning mr-2" onClick={e => this.handleShow()}>Show</button>
          <button className="btn btn-success mr-2" onClick={e => this.loadData()}>Load Todos</button>
          <button className="btn btn-danger" onClick={e => this.handleRemoveData()}>Remove Todos</button>
        </div>

        <div className={this.props.show ? '' : 'Hide'}>
          <Todo data={this.props.todos} />
        </div>
      </React.Fragment>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

