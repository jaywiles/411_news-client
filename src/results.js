// import React, { Component } from 'react';
// import Search from "./search"
// import App from './App';

// class Results extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stories: [],
//       searchWords: "",
//       searchDates: "",
//       searchAuthor: "",
//     }
//   }

//   // fetchStories used to be here...

//   console.log(Search.searchWords)

//   render() {
//     const stories = this.state.stories;

//     console.log(stories.length)

//     if (stories.length > 0) {
//       return (
//         stories.map(story => {
//           const {title, author, url, timeCreatedClock, timeCreatedUnix} = story;
//           return (
//             <div key={timeCreatedUnix}>
//               <p><a href={url}>{title}</a> by {author}</p>
//               <p>Published: {timeCreatedClock}</p>
//               <br></br>
//             </div>
//           )
//         })
//       )
//     } else if (stories.length === 0) {
//       return (
//         <h1>No results found. Please search again.</h1>
//       )
//     }
//     // need else if here to say else if submit has not been pushed, don't show anything
//   }



// }

// export default Results;