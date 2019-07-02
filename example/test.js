var Js2Image = require('../index');

var image = './../resource/xueqiao.png';
var source = '/Users/lange/Downloads/js2image-master 2/resource/mustache.js';
var out = './../target/vag.js';
var options = {};

// 获取结果的code
Js2Image.writeToFile(source, image, out, {
    reverse: false,
    size: {
        width: 70
    }
}).then(function (code) {

});
