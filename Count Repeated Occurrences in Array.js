const arr1 = [1,2,3,3,5,4,1,3,4,4,4,4,2,-1,-2,-2,0,7,0];
const arr2 = ["banana","banana","banana","banana","banana","apple","apple","litchi","litchi","litchi"];

function countOccurrences(arr) {
    let result = {};
    arr.forEach(x => {
        if(result.hasOwnProperty(x)) {
            result[x] += 1;
        } else {
            result[x] = 1;
        }
    })
    return result;
}

console.log(countOccurrences(arr1));    // {0: 2, 1: 2, 2: 2, 3: 3, 4: 5, 5: 1, 7: 1, -1: 1, -2: 2}
console.log(countOccurrences(arr2));    // {banana: 5, apple: 2, litchi: 3}

//This will fail in cases where elements are a mix of strings and variables
// const arr = [1, "1", true, "true", false, 0, "0"];

//JavaScript object keys are always strings, so: 1 and "1" will both be treated as the same key: '1'; true and "true" → both become 'true' 
//So distinct values may get merged incorrectly. Hence, this will result in {1: 2, true: 2}
//This will require code using Map()
