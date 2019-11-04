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

  componentDidMount() {
    this.fetchStories();
  }

  fetchStories() {
    fetch (`http://hn.algolia.com/api/v1/search?query=${this.state.stories}&tags=story`)
    // ${this.props.searchWords(this.state.homeLink)}
    // below is fetch for word "obama" for testing
    // fetch (`http://hn.algolia.com/api/v1/search?query=obama&tags=story`)
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.hits.map (story => ({
      timeCreatedUnix: `${story.created_at_i}`,
      timeCreatedClock: `${story.created_at}`,
      title: `${story.title}`,
      author: `${story.author}`,
      url: `${story.url}`,
      points: `${story.points}`
    })))
    .then(stories => this.setState({
      stories,
      // trying for line to below to check if searchWords is blank... if so, don't setState
      // searchWords: !""
    }))
    .catch(error => console.log("search parsing failed", error))
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
        <Search onSubmit={fields => this.onChange(fields)}></Search>
        <Results showResults={this.state.stories}>{console.log(this.state.stories.length)}</Results>
      </div>
    )
  }
}

export default App;
