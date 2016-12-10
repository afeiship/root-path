var path = require('path');
var fs = require('fs');


function discoverRoot(inRootPoint) {
  var rootPoint =  inRootPoint || '.git';
  var dirs=fs.readdirSync('.');
  if(dirs.indexOf(rootPoint)==-1){
    process.chdir(path.resolve(__dirname,'..'))
    return discoverRoot(rootPoint);
  }
  return path.resolve(__dirname,'.');
}

module.exports = discoverRoot;
