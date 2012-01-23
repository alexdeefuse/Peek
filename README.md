Peek

## What's Peek?

Simple http grabber for NodeJs. Can be used for grabbing html, xml, json, js, css and pretty much anything text based.

Its as simple as:

```javascript
var r = new Peek();
r.url('http://google.com');
r.run(function(err, content){
	
});
```

## Installation

Using [NPM](http://www.npmjs.org/):

```
$ npm install Peek
```

Or using Git:

```
$ git clone git://github.com/alexdeefuse/Peek.git node_modules/Peek
```

Then install module dependencies.

## Running the tests

To test run:

```
$ make test
```

## License

Copyright (c) 2010-2011 Deefuse &lt;alex@deefuse.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.