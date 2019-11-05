import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      searchWords: "",
      searchDates: "",
      searchAuthor: "",
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  searchWordsSubmit = (e) => {
    e.preventDefault();
    this.fetchWords(this.state.searchWords)
  }

  searchDatesSubmit = (e) => {
    e.preventDefault();
    this.fetchDate(this.state.searchDates)
  }

  searchAuthorSubmit = (e) => {
    e.preventDefault();
    this.fetchAuthor(this.state.searchAuthor)
  }

  fetchWords = (search) => {
    fetch (`http://hn.algolia.com/api/v1/search?query=${search}&tags=story`)
    .then(response => response.json())
    .then(data => {
      if (data.hits.length > 0) {
        this.setState({stories: data.hits})
      } else {
        this.setState("No results found. Please search again.")
      }
    })
    .catch(error => console.log("Parsing failed: ", error))
  }

  fetchDate = (search) => {
    fetch (`http://hn.algolia.com/api/v1/search_by_date?query=${search}&tags=story`)
    .then(response => response.json())
    .then(data => {
      if (data.hits.length > 0) {
        this.setState({stories: data.hits})
      } else {
        this.setState("No results found. Please search again.")
      }
    })
    .catch(error => console.log("Parsing failed: ", error))
  }

  fetchAuthor = (search) => {
    fetch (`http://hn.algolia.com/api/v1/search?tags=author_${search}&tags=story`)
    .then(response => response.json())
    .then(data => {
      if (data.hits.length > 0) {
        this.setState({stories: data.hits})
      } else {
        this.setState("No results found. Please search again.")
      }
    })
    .catch(error => console.log("Parsing failed: ", error))
  }

  render() {
    return (
      <div className="page-container">
        <div className="form-container">
          <form>
            <input
              name='searchWords'
              placeholder="Search story titles"
              value={this.state.searchWords}
              onChange={this.onChange}
            ></input>
            <button onClick={this.searchWordsSubmit}>Search</button>
          </form>
          <br/>
          <form>
            <input
              name='searchDates'
              type='date'
              placeholder="Search story dates"
              value={this.state.searchDates}
              onChange={this.onChange}
            ></input>
            <button onClick={this.searchDatesSubmit}>Search</button>
          </form>
          <br/>
          <form>
            <input
              name='searchAuthor'
              placeholder="Search story authors"
              value={this.state.searchAuthor}
              onChange={this.onChange}
            ></input>
            <button onClick={this.searchAuthorSubmit}>Search</button>
          </form>
          <h2>You searched: {this.state.search}</h2>
        </div>
        <div className="results-container">
          {console.log(`is this right: `, this.state.stories)}
          {this.state.stories.map ((stories, i) => {
            return (
              <div key={i+1}>
                <p><a href={stories.url}>{stories.title}</a> by {stories.author}</p>
                <p>Published: {stories.created_at}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;