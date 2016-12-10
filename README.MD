#root-path
> Node app/root path.


## usage:
```javascript
//default use '.git' file as root point:
var ROOT_PATH = require('root-path')();

//or your want to change your root point file:
var MY_ROOT_PATH = require('root-path')('package.json')
```
