import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from "./search"
import Results from "./results"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      stories: [],
      searchWords: null,
      // updatedValue: "obama"
    }
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    })
  }

  // onSubmit = updatedValue => {
  //   this.setState({
  //     fields: {
  //       ...this.state.fields,
  //       ...updatedValue
  //     }
  //   })
  // }

  // onChangeValue(newName) {
  //   this.setState({
  //     homeLink: newName
  //   });
  // }

  showResults = storyList => {
    this.setState({
      stories: {
        ...this.state.stories,
        ...storyList
      }
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Search stories</h1>
        {/* <div homeLink={this.state.homeLink}></div> */}
        <Search onChange={fields => this.onChange(fields)}></Search>
        <Results showResults={this.state.stories}>{console.log(this.state.stories.length)}</Results>
      </div>
    )
  }
}

export default App;
