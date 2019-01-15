import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    name: '',
    caption: ''
  }

  changeText = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({
      caption: `Hello ${this.state.name}`,
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submit}>
          <label>Name</label>
          <input
            onChange={this.changeText}
            type="text"
            value={this.state.name}
          />
          <br />
          <button>Submit</button>
        </form>

        <hr/>
        <h1>{ this.state.caption }</h1>
      </div>
    );
  }
}

export default App;
