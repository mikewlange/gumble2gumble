
usage：

```javascript
var Js2Image = require('js2image');

var image = './resource/tree.png';
var source = './resource/jquery.js';
var target = './target/xmas.js';
var options = {};

// get the result code
var sourceCode = fs.readFileSync(source);
Js2Image.getCode(sourceCode, image, options).then(function (code) {
  console.log(code);
})

// or write into file
Js2Image.writeToFile(source, image, target, options).then(function (code) {
  console.log(code);
});
```
![alt text](https://media.giphy.com/media/Kczr1AZbsh6Y0lpumm/source.gif "Logo Title Text 1")
