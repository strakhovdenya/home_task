"use strict";

var _csvtojson = _interopRequireDefault(require("csvtojson"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var converter = (0, _csvtojson["default"])({
  trim: true,
  delimiter: ';',
  checkType: true,
  ignoreColumns: /Amount/
}).on('error', function (err) {
  console.log(err);
}).on('header', function (header) {
  header.forEach(function (part, index, theArray) {
    return theArray[index] = part.toLowerCase();
  });
});

var readStream = _fs["default"].createReadStream('./csv/file.csv');

var writeStream = _fs["default"].createWriteStream('./txt/file.txt');

readStream.pipe(converter).pipe(writeStream);