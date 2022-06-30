import React from "react";
import Glossary from './Glossary.jsx'
import AddWord from './AddWord.jsx'
import SearchWord from './SearchWord.jsx'
const axios = require('axios');

const server = 'http://localhost:3000/glossary';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: ['words', 'yay', 'wow', 'more'],
      allData: []
    };
  }

  //retrieve words from server function
  get() {
    return axios.get(server)
      .then(response => this.setState({
        glossary: response.data,
        allData: response.data
      }));
  }

  //post word to server function
  post (word) {
    return axios.post(server, word)
      .catch(err => alert ('already in gloassay'))
  }

  // reset to home page of glossary
  home () {
    this.setState({glossary: this.state.allData});
  }

  // filter page to results of search word
  search (word) {
    var copy = [];
    this.state.allData.forEach(glossaryWord => {
      if (glossaryWord.word.includes(word)) {
        copy.push(glossaryWord);
      }
    })
    this.setState({glossary: copy});
  }

  // delete word from glossary
  rm (text) {
    let obj = {word: text};
    return axios.delete(server, {data: obj})
      .then(this.get.bind(this))
  }

  componentDidMount() {
    this.get.call(this)
  }

  render() {
    return (
      <div>
        <h1 className="glossary-title" onClick={this.home.bind(this)}>Glossary</h1>
        <SearchWord search={this.search.bind(this)}/>
        <AddWord add={this.post.bind(this)}/>
        <Glossary glossary={this.state.glossary} rm={this.rm.bind(this)}/>
      </div>
    )
  }
}

export default App;