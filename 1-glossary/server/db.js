let mongoose = require('mongoose');

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/glossary');

// 2. Set up any schema and models needed by the app
const glossarySchema = mongoose.Schema({
  word: {
    type: String,
    unique: true
  },
  definition: String
});

const Glossary = mongoose.model('Glossary', glossarySchema);

let get = (callback=()=> {}) => {
  Glossary.find({}, (err, words) => {
    if (err) {
      callback(err)
      return;
    }
    callback(null, words);
  })

}

let insert =  (wordObj, callback=()=>{}) => {
  // going to have two properties in argument
  console.log('this is wordObj', wordObj)
  if (wordObj.replacement === undefined) {
    const word = new Glossary(wordObj)
    return word.save()
  } else {
    let old = {word: wordObj.word}
    let replacement = {
      word: wordObj.replacement,
      definition: wordObj.definition
    }
    return Glossary.findOneAndUpdate(old, replacement);
  }
}

let rm = (wordObj, callback=()=> {}) => {
  console.log(wordObj);
  return Glossary.findOneAndDelete(wordObj);
}

// 3. Export the models
// 4. Import the models into any modules that need them

// insert({
//   word: 'hello',
//   replacement: 'your time is now'
// });

module.exports.get = get;
module.exports.insert = insert;
module.exports.rm = rm;