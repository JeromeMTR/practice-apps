import React from "react";
import WordList from './WordList.jsx'
import AddWord from './AddWord.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  //retrieve words from server function

  //post word to server function
  post () {
    // axios.post('http://localhost:3000/', {
    //   word: text
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    console.log('posted');
  }

  // change state of edited word function



  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <AddWord add={this.post.bind(this)}/>
        <WordList words/>
      </div>
    )
  }
}

export default App;