import React from 'react';

class SearchWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }
  }

  changeHandler(e) {
    this.setState({word: e.target.value});
  }

  search(e) {
    e.preventDefault();
    this.props.search(this.state.word);
  }

  render() {
    return (
      <form>
        <input
          onChange={this.changeHandler.bind(this)}
          placeholder="So silly, SEARCH HERE!">
        </input>
        <button onClick={this.search.bind(this)}>Search</button>
      </form>
    )
  }
}

export default SearchWord