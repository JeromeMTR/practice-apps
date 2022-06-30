import React from "react";
import Glossary from './Glossary.jsx'
import AddWord from './AddWord.jsx'
import SearchWord from './SearchWord.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: ['words', 'yay', 'wow', 'more'],
      filetred: []
    };
  }

  //retrieve words from server function
  get() {
    return axios.get('http://localhost:3000/glossary')
      .then(response => this.setState({glossary: response.data}));
  }



  //post word to server function
  post (word) {
    return axios.post('http://localhost:3000/glossary', word
    )
    .then((response) => {
      console.log(response);
    })
    .catch
    // console.log('posted');
  }

  // change state of edited word function
  // update (word) {
    //  Promise.all[post(word), get()]
    //   .then(results => {
      //     console.log(results[1]);
      //   })
      // }
  search (word) {
    var copy = [];
    this.state.glossary.forEach(glossaryWord => {
      console.log(word);
      console.log(glossaryWord.word)
      console.log(glossaryWord.word.includes(word))
      if (glossaryWord.word.includes(word)) {
        copy.push(glossaryWord);
      }
    })
    console.log(copy);
    this.setState({filetred: copy});
  }

  componentDidMount() {
    this.get.call(this)
    .then(() => {
      console.log(this.state.glossary)
    })
  }

  render() {
    return (
      <div>
        <p>Glossary</p>
        <SearchWord search={this.search.bind(this)}/>
        <AddWord add={this.post.bind(this)}/>
        <Glossary glossary={this.state.glossary}/>
      </div>
    )
  }
}

export default App;