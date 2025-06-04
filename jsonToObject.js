// Converting JSON to js Object .
const jsonString = '{"name":"Ankit","age":"19"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(typeof jsonObject);

// Converting Object to JSON

const myObj = {
  name: "Alice",
  age: 25,
};

const objectToJson = JSON.stringify(myObj);
console.log(objectToJson);
console.log(typeof objectToJson);
