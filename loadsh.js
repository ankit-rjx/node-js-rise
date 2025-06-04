var _ = require("lodash");

// Lodash is a JavaScript utility library that provides helpful methods for manipulating arrays, objects, and other types of data. It was initially released in 2012, around the same time as underscore.js, another utility library

var data = ["person", "person", 1, 2, 1, 2, "name", "age", "2"];
var filter = _.uniq(data);
console.log(filter);
