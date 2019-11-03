import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from "./search"
import Results from "./results"

class App extends Component {
  // onSubmit = fields => {
  //   console.log("App: ", fields)
  // }
  state = {
    fields: {},
    stories: []
  }

  onSubmit = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    })
  }

  showResults = storyList => {
    this.setState({
      stories: {
        ...this.state.stories,
      }
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Search stories</h1>
        <Search onSubmit={fields => this.onSubmit(fields)}></Search>
        <Results >{console.log(this.state.stories.length)}</Results>
      </div>
    )
  }
}

export default App;
