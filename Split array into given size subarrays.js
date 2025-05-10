function splitArray(arr, n) {
    let result = [];
    if (arr.length === 0) {
        result = arr;
    } else if (n >= arr.length) {
        result.push(arr);
    } else {
        for (let i = 0; i < arr.length; i = i + n) {
            result.push(arr.slice(i, i + n));
        }
    }
    return result;
}

// using spread operator
// function splitArray(arr, n) {
//     let result = [];
//     if (arr.length === 0) {
//         result = arr;
//     } else if (n >= arr.length) {
//         result = [...result, arr];
//     } else {
//         for (let i = 0; i < arr.length; i = i + n) {
//             result = [...result, arr.slice(i, i + n)]
//         }
//     }
//     return result;
// }


console.log(splitArray([1, 2, 3, 4, 5], 2)); //  [[1,2], [3,4], [5]]
console.log(splitArray([1, 2, 3, 4, 5], 7)); //  [[1,2,3,4,5]]
console.log(splitArray([1, 2, 3, 4, 5], 1)); //  [[1],[2],[3],[4],[5]]
console.log(splitArray([], 2));              //  []
console.log(splitArray([3], 1));             //  [[3]]

//function that splits an array into subarrays of size n and
//returns an array of the sub arrays
//conditions: chunk size n is a positive integer greater than 0.
// The input array can be empty.
// If n is larger than the array length, return a single chunk with the entire array.
// If n is 1, return an array of single-element arrays.