var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: {type: String, required: true, unique: true},
  url: String,
  created_at: Date
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;