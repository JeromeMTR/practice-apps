let mongoose = require('mongoose');

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/glossary');

// 2. Set up any schema and models needed by the app
const glossarySchema = mongoose.Schema({
  word: {
    type: String,
    unique: true
  }
});

const Glossary = mongoose.model('Glossary', glossarySchema);


let get = (callback=()=> {}) => {
  Glossary.find({}, (err, words) => {
    if (err) {
      callback(err)
      return;
    }
    console.log(words)
  })

}

let insert =  (wordObj, callback=()=>{}) => {
  // going to have two properties in argument
  if (wordObj.replacement === undefined) {
    const word = new Glossary(wordObj)
    word.save((err) => {
      callback(err)
      return;
    })
  } else {
    let old = {word: wordObj.word}
    let replacement = {word: wordObj.replacement}
    Glossary.findOneAndUpdate(old, replacement, callback);
  }
}

// 3. Export the models
// 4. Import the models into any modules that need them

// insert({
//   word: 'hello',
//   replacement: 'your time is now'
// });
get();


module.exports.get = get;
module.exports.insert = insert;
