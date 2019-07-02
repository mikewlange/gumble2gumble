####  **警告：压缩后的js请人工确认后再投入生产使用，不保证100%可运行，目前测试的js以及souche官网的js都已经试验过，基本可以保证99%的js压缩后没有问题



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
