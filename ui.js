const fs = require( "fs");

fs.writeFileSync("bio.txt", " some data");

fs.appendFileSync("bio.txt", " more data");
const data=fs.readFileSync( "bio.txt","utf-8");
console.log(data);
