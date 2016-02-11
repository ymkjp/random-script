var fs = require('fs');
var path = require('path');
var util = require('util');
var RandomScript = require('../lib/random-script');
var parsers = require('unicode-data/scripts/parse-blocks-scripts-properties.js');

var version = '8.0.0';
console.log(RandomScript.create().string(8,'Kanbun'));

/**
 * https://github.com/mathiasbynens/node-unicode-data/blob/master/data/8.0.0-blocks.txt#L14-L18
 */
var blocks = parsers.parseBlocks(version);
var unicodeBlocks = {};
var standardizedKey;
var codePoints;
var codeRange;
Object.keys(blocks).forEach(function (key) {
  standardizedKey = RandomScript.standardizeKey(key);
  codePoints = blocks[key];
  codeRange = [codePoints.shift(), codePoints.pop()];
  unicodeBlocks[standardizedKey] = codeRange;
});
unicodeBlocks = JSON.stringify(unicodeBlocks);
var filename = util.format('unicode-%s-blocks.json', version);
var filePath = path.join('data', filename);
fs.writeFile(filePath, unicodeBlocks, function(error) {
  if (error) {
    throw error
  }
  console.log('Successfully generated to ' + filePath);
  //console.log(unicodeBlocks);
});
