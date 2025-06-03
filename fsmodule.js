var fs = require("fs");
var os = require("os");
var note = require("./note.js")

var user = os.userInfo();

 // console.log(user);

// fs.appendFile(
//   "testing.txt",
//   "Hi there i am Here" + user.username + "!\n",
//   () => {
//     console.log("file is created");
//   }
// );

// console.log(os)
// console.log(fs)

let res = note.addNumber(2,3);

console.log(res)

//  41:30