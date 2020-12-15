import Todo from './Todo';
import './App.css';

import React from 'react';
import { connect } from 'react-redux';

import { getTodos } from './store/actions';

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => dispatch(getTodos()),
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

class App extends React.Component {s
  constructor(props) {
    super(props)
  }



  loadData() {
    this.props.getTodos();
  }

  render() {
    return (
      <React.Fragment>
        <div className="mb-3">
          <button className="btn btn-success mr-2" onClick={e => this.loadData()}>Load Scars</button>    
        </div>
        <div >
          <Todo data={this.props.todos} />
        </div>
      </React.Fragment>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

