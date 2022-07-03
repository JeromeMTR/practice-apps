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
      glossary: [],
      allData: []
    };
  }

  //retrieve words from server function
  get() {
    return axios.get(server)
      .then(response => this.setState({
        glossary: response.data,
        allData: response.data
      }))
      .catch(err => console.log('err'));
  }

  //post word to server function
  post (word) {
    if (word.length !== 0) {
      return axios.post(server, word)
      .then(this.get())
      .catch(err => alert ('already in glossary'))
    }
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

  // edit word and definition
  edit(editObj) {
    this.post.call(this, editObj)
      .then(this.get.bind(this));
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
        <Glossary
          glossary={this.state.glossary}
          rm={this.rm.bind(this)}
          edit={this.edit.bind(this)}/>
      </div>
    )
  }
}

export default App;