import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Search from "./search"
// import Results from "./results"

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

  fetchWords() = (search) => {
    fetch (`http://hn.algolia.com/api/v1/search?query=${search}&tags=story`)
    // below is fetch for word "obama" for testing
    // fetch (`http://hn.algolia.com/api/v1/search?query=obama&tags=story`)
    .then(response => response.json())
    
    // option 1
    .then(data => {
      if (data.hits.length > 0) {
        this.setState({stories: data.hits})
      }
    })

    // option 2
    .then(parsedJSON => {
      if (data.hits.length > 0) {
        parsedJSON.hits.map (story => ({
          timeCreatedUnix: `${story.created_at_i}`,
          timeCreatedClock: `${story.created_at}`,
          title: `${story.title}`,
          author: `${story.author}`,
          url: `${story.url}`,
          points: `${story.points}`
        }))
      }
    })

    // def put this at the bottom of option 2
    .then(stories => this.setState({
      stories,
    }))
    .catch(error => console.log("Parsing failed: ", error))
  }

  fetchDate() = (search) => {
    fetch (`http://hn.algolia.com/api/v1/search_by_date?query=${search}&tags=story`)
    .then(response => response.json())
    .then(parsedJSON => {
      if (data.hits.length > 0) {
        parsedJSON.hits.map (story => ({
        timeCreatedUnix: `${story.created_at_i}`,
        timeCreatedClock: `${story.created_at}`,
        title: `${story.title}`,
        author: `${story.author}`,
        url: `${story.url}`,
        points: `${story.points}`
      }))
    }
  })
    .then(stories => this.setState({
      stories,
    }))
    .catch(error => console.log("Parsing failed: ", error))
  }

  fetchAuthor() = (search) => {
    fetch (`http://hn.algolia.com/api/v1/search?tags=author_${search}&tags=story`)
    .then(response => response.json())
    .then(parsedJSON => {
      if (data.hits.length > 0) {
        parsedJSON.hits.map (story => ({
        timeCreatedUnix: `${story.created_at_i}`,
        timeCreatedClock: `${story.created_at}`,
        title: `${story.title}`,
        author: `${story.author}`,
        url: `${story.url}`,
        points: `${story.points}`
      }))
    }
  })
    .then(stories => this.setState({
      stories,
    }))
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
                // onChange={e => this.setState({searchWords: e.target.value})}
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
        <div>
          {this.state.stories.map ((stories, i) => {
            return (
              <div key={i+1}>
                <p><a href={stories.url}>{stories.title}</a> by {stories.author}</p>
                <p>Published: {stories.date}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }




}


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fields: {},
//       stories: [],
//       searchWords: "",
//       searchDates: "",
//       searchAuthor: "",
//       // updatedValue: "obama"
//     }
//   }

//   componentDidMount() {
//     this.fetchStories();
//   }

//   fetchStories(searchWords) {
//     fetch (`http://hn.algolia.com/api/v1/search?query=${searchWords}&tags=story`)
//     // below is fetch for word "obama" for testing
//     // fetch (`http://hn.algolia.com/api/v1/search?query=obama&tags=story`)
//     .then(response => response.json())
//     .then(parsedJSON => parsedJSON.hits.map (story => ({
//       timeCreatedUnix: `${story.created_at_i}`,
//       timeCreatedClock: `${story.created_at}`,
//       title: `${story.title}`,
//       author: `${story.author}`,
//       url: `${story.url}`,
//       points: `${story.points}`
//     })))
//     .then(stories => this.setState({
//       stories,
//       // trying for line to below to check if searchWords is blank... if so, don't setState
//       // searchWords: !""
//     }))
//     .catch(error => console.log("Parsing failed: ", error))
//   }

//   onChange = updatedValue => {
//     this.setState({
//       fields: {
//         ...this.state.fields,
//         ...updatedValue
//       }
//     })
//   }

//   // componentWillReceiveProps() {
//   //   this.fetchStories();
//   // }

//   showResults = storyList => {
//     this.setState({
//       stories: {
//         ...this.state.stories,
//         ...storyList
//       }
//     })
//   }

//   render() {
//     const stories = this.state.stories;
//     return (
//       <div className="container">
//         <h1>Search stories</h1>
//         {/* <div homeLink={this.state.homeLink}></div> */}
//         <Search onSubmit={fields => this.onChange(fields)}></Search>
//         <Results showResults={this.state.stories}>{console.log(this.state.stories.length)}</Results>
//       </div>
//     )
//   }
// }

export default App;




// render() {
  // const stories = this.state.stories;


  // need else if here to say else if submit has not been pushed, don't show anything
// }




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