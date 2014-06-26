var through = require('through');

module.exports = through(function write(data) {
    this.emit('data', data.toString() + '\n');
  },
  function end () {
    this.emit('end');
});

