var through = require('through2');

module.exports = through(function(chunk,enc,cb){
  this.push(chunk.toString() + '\n');
});
