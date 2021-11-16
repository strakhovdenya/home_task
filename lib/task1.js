"use strict";

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.to-string.js");

process.stdin.on('data', data => {
  process.stdout.write(data.toString().replace(/[\n\t\r]/g, "").split('').reverse().join('') + '\n');
});