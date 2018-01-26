var fs = require("fs");

var fileRead = fs.readFileSync('textfile.txt','utf8');
fs.writeFileSync("writeMe.txt", fileRead);