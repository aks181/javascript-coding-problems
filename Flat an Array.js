const arr = [1, [2], [3, 4], [5, [6, [7], [8, 9]]], 10];

//Flatten an array using Array.flat();
function flattenArray(array) {
  return array.flat(Infinity);
}

//Flatten an array using For Each loop
function flattenArrayUsingForEachLoop(array) {
  let flattenedArray = [];
  array.forEach((x) => {
    if (Array.isArray(x)) {
      const nestedArray = flattenArrayUsingForEachLoop(x);
      nestedArray.forEach((y) => flattenedArray.push(y));
    } else {
      flattenedArray.push(x);
    }
  });
  return flattenedArray;
}

//Flatten an array using reduce and concat
function flattenArrayUsingReduce(array) {
  return array.reduce(
    (acc, curr) =>
      Array.isArray(curr)
        ? acc.concat(flattenArrayUsingReduce(curr))
        : acc.concat(curr),
    []
  );
}

//Flatten an array using for loop
function flattenArrayUsingForLoop(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const nestedArray = flattenArrayUsingForLoop(array[i]);
      for (let j = 0; j < nestedArray.length; j++) {
        flattenedArray.push(nestedArray[j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }

  return flattenedArray;
}

console.log(flattenArray(arr));
console.log(flattenArrayUsingForEachLoop(arr));
console.log(flattenArrayUsingReduce(arr));
console.log(flattenArrayUsingForLoop(arr));
