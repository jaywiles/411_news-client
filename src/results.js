import React, { Component } from 'react';
import Search from "./search"

class Results extends Component {
  state = {
    fields: {},
    stories: []
  }

  componentDidMount() {
    this.fetchStories();
  }

  fetchStories() {
    // fetch (`http://hn.algolia.com/api/v1/search?query=${this.searchWords}&tags=story`)
    // below is fetch for testing
    fetch (`http://hn.algolia.com/api/v1/search?query=obama&tags=story`)
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.map (story => ({
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

  render() {
    const stories = this.state.stories;

    if (stories.length > 0) {
      return (
        <h1>Woohoo! Something is happening!</h1>
      )
    } else if (stories.length === 0) {
      return (
        <h1>No results found. Please search again.</h1>
      )
    }
  }



}

export default Results;