import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWords: "",
      // searchDates: "",
      // searchAuthor: "",
    }
  }

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value});
    // const inputText = `${this.state.searchWords}`
    this.setState({
      [e.target.name]: e.target.value
      // message: inputText
    })
  }

  onSubmit = e => {
    // e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      searchWords: "",
      // searchDates: "",
      // searchAuthor: "",
    })
    this.onSubmit({
      searchWords: "",
      // searchDates: "",
      // searchAuthor: "",
    })
  }

  render() {
    return (
      <div>
        <form>
            <input
              name='searchWords'
              placeholder="Search story titles"
              value={this.state.searchWords}
              onChange={e => this.change(e)}
              // onChange={e => this.setState({searchWords: e.target.value})}
            ></input>
            <button onClick={e => this.onSubmit(e)}>Search</button>
          </form>
          <h2>You searched: {this.state.searchWords}</h2>
          <br/>
          {/* <form>
            <input
              name='searchDates'
              placeholder="Search story dates"
              value={this.state.searchDates}
              onChange={e => this.change(e)}
            ></input>
            <button onClick={() => this.onSubmit()}>Search</button>
          </form>
          <br/>
          <form>
            <input
              name='searchAuthor'
              placeholder="Search story authors"
              value={this.state.searchAuthor}
              onChange={e => this.change(e)}
            ></input>
            <button onClick={() => this.onSubmit()}>Search</button>
        </form> */}
      </div>
    )
  }
}

export default Search;