var path = require('path');
var fs = require('fs');
var count = 0,
  limit = 10;


function discoverRoot(inRootPoint) {
  var rootPoint = inRootPoint || '.git';
  var dirs = fs.readdirSync('.');
  if (dirs.indexOf(rootPoint) == -1) {
    process.chdir('..');
    count++;
    return count < limit ? discoverRoot(rootPoint) : path.resolve('.');
  }
  return path.resolve(__dirname, '.');
}

module.exports = discoverRoot;
