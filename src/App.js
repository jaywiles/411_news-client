import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWords: "",
      searchDates: "",
      searchAuthor: "",
    }
  }


  // which component function to use... ??

  fetchSearch() {
    // fetch (`http://hn.algolia.com/api/v1/search?query=${searchWords}&tags=story`)
    // below is fetch for testing
    fetch (`http://hn.algolia.com/api/v1/search?query=obama&tags=story`)
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.hits.map (story => ({
      title: `${story.title}`
    })))
    .then(stories => this.setState({
      stories,
      // trying for line to below to check if searchWords is blank... if so, don't setState
      searchWords: !""
    }))
  }


}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
