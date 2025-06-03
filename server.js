//----------------------------------

console.log("server file is running");

//----------------------------------

// function addnum(a,b){
//     return a + b;
// }

//-----------------------------------

// var add = function (a, b) {
//   return a + b;
// };

//-----------------------------------

// var add = (a, b) => {
//   return a + b;
// };

//------------------------------------

// var add = (a, b) => a + b;

// var result = add(123, 7);

// console.log(result);

//------------------------------------

// Important things in js
// Callback Function
// Functions
// Object in js

//-------------------------------------

(function () {
  console.log("Prince is Added");
})();

// callback function is a function which is called by another function

//---------------------------------

function callback() {
  console.log("i am calling a Callback");
}

//-----------------------------------

const add = function (a, b) {
  var result = a + b;
  console.log("result:" + result);
  callback();
};

add(3, 4);

//-----------------------------------------

function temptesting(x, y, ankitfn) {
  console.log("Inside the first function");
  ankitfn();
}

temptesting(1, 2, () => console.log("Inside callback function "));
