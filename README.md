# postxml-custom-tags
[![npm version][npm-image]][npm-url]

> [PostXML] plugin anable using custom tags in html. It replace them with div elements.

## Installation
`npm i postxml-custom-tags --save-dev`

## Usage
```js
var fs = require('fs'),
   postxml = require('postxml'),
   plugin = require('postxml-custom-tags');

var html = fs.readFileSync('input.html', 'utf8');

var output = postxml(
      html,
      [
         plugin()
      ]
   );
```

## Example

### Input
```html
<custom class="b-block" ng-click="init = 2">Text</custom>
```

### Output
```html
<div class="b-block" ng-click="init = 2">Text</div>
```

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-custom-tags
[npm-image]: http://img.shields.io/npm/v/postxml-custom-tags.svg?style=flat-square
