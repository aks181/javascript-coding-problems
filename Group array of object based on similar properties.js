//goal is to write a function that takes an array of objects and a property name as input
//and returns an object where keys are unique values of the property
//and values are array ofobjects that have the same key value

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
groupBy(users, "age");

//Output: {
//   "25": [ {"name": "Alice", "age": 25}, {"name": "Charlie","age": 25}  ],
//   "30": [ {"name": "Bob","age": 30} ]
// }

function groupBy(arr, key) {
  let result = [];

  for (let item of arr) {
    const keyValue = item[key];
    
    if (!result.hasOwnProperty(keyValue)) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);
  }
  return result;
}

// Another quite expensive approach using multiple loops
// function groupBy(arr, key) {
//     let result = [];
//     let keysArray = [];

//     for(let item of arr) {
//         keysArray.push(item[key]);
//     }

//     let uniqueKeysArray = Array.from(new Set(keysArray));

//     for(let val of uniqueKeysArray) {
//         let valueArray = arr.filter(x => x[key] === val);
//         result[val] = valueArray;
//     }

//     return result;
// }