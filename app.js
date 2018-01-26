var fs = require("fs");

fs.readFile('textfile.txt','utf8', function(err, data){
    fs.writeFile("writeMe.txt", data);
});
