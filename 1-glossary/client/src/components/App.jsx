import React from "react";
import Glossary from './Glossary.jsx'
import AddWord from './AddWord.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: ['words', 'yay', 'wow', 'more']
    };
  }

  //retrieve words from server function
  get() {
    axios.get('http://localhost:3000/')
      .then(response => this.setState({words: response}));
  }



  //post word to server function
  post (word) {
    // axios.post('http://localhost:3000/', {
    //   data: text
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
        <Glossary glossary={this.state.glossary}/>
      </div>
    )
  }
}

export default App;