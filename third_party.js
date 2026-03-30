var clc=require("cli-color");
console.log(clc.blue("Text in red"));
console.log(clc.red.bgWhite.underline("Underlined red text on white background."));
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;

console.log(error("Error!"));
console.log(warn("Warning"));
console.log(notice("Notice"));

