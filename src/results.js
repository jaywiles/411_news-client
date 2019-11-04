import React, { Component } from 'react';
import Search from "./search"
import App from './App';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      stories: [],
      // searchWords: null
    }
  }

  componentDidMount() {
    this.fetchStories();
  }

  fetchStories() {
    fetch (`http://hn.algolia.com/api/v1/search?query=${`obama`}&tags=story`)
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

  render() {
    const stories = this.state.stories;

    console.log(stories.length)

    if (stories.length > 0) {
      return (
        stories.map(story => {
          const {title, author, url, timeCreatedClock, timeCreatedUnix} = story;
          return (
            <div key={timeCreatedUnix}>
              <p><a href={url}>{title}</a> by {author}</p>
              <p>Published: {timeCreatedClock}</p>
              <br></br>
            </div>
          )
        })
      )
    } else if (stories.length === 0) {
      return (
        <h1>No results found. Please search again.</h1>
      )
    }
    // need else if here to say else if submit has not been pushed, don't show anything
  }



}

export default Results;