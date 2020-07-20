var config = require('./package.json');
var path = require('path');
var fs = require('fs');
var w_path = process.cwd();
var working_config = path.join(w_path,'jwtfakeman.json');
try {
  if (fs.existsSync(working_config)) {
    //file exists
  }else{
      console.error("Config file `jwtfakeman.json` missing!");
      console.error("Please visit:");
      console.error(config.homepage);
      console.error("for more information");
    process.exit();
    }
} catch(err) {
    console.error(err);
}
console.log(working_config);
