stringsplz
==========

A through transform stream that emits it's data.toString()-ed.in the callback.
Useful for saving a dozen keystrokes when piping to write streams that expect
data to be stringified.

```javascript
var stringsplz = require('stringsplz');

// works
buffersStream.pipe(stringsplz).pipe(fs.createWriteStream('stringsplz.txt');

// works
objectsStream.pipe(stringsplz).pipe(fs.createWriteStream('stringsplz.txt');
```
