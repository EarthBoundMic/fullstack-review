var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: {type: String, required: true, unique: true},
  id: {type: Number, unique: true},
  url: {type: String, required: true}
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;