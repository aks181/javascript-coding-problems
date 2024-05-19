const arr = [1,2,3,3,5,4,1,2,-1,-2,-2,0,7,0];
const sampleArray = [
    1, 2, 2, 3, 3, 3,                // Basic duplicates
    'a', 'b', 'a', 'c', 'b',         // String duplicates
    1, '1', 2, '2',                  // Numbers and numeric strings
    true, false, true,               // Boolean values
    null, null,                      // Null values 
    undefined, undefined,            // Undefined values 
    {}, {},                          // Empty objects **
    [], [],                          // Empty arrays **
    {a: 1}, {a: 1},                  // Identical objects **
    [1, 2], [1, 2],                  // Identical arrays **
    'special@char', 'special@char',  // Strings with special characters
    NaN, NaN,                        // NaN values
    0, -0, +0,                       // Zero and signed zeros
    Infinity, -Infinity, Infinity    // Infinity values
   
];

//Remove duplicates using Set
function removeDuplicatesUsingSet(array) {
    let set = new Set(array);
    return Array.from(set);
    // return Array(...set)
    //return [...set];
}

//Remove duplicates using includes
function removeDuplicatesUsingIncludes(array) {
    let newArray = [];
    array.forEach(x => {
        if(!newArray.includes(x)) {
            newArray.push(x);
        }
    })
    return newArray;
}

//Remove Duplicates using reduce
function removeDuplicatesUsingReduce(array) {
    return array.reduce((acc, curr) => {
        if(!acc.includes(curr)) {
            acc.push(curr);
        }
        return acc;
    }, [] )
}

//Remove duplicates using indexOf
function removeDuplicatesUsingIndexOf(array) {
    return array.filter((x,index) => array.indexOf(x) === index);
}

//Remove duplicates using forEach adnd indexOf
function removeDuplicatesUsingForEach(array) {
    let newArray = [];
    array.forEach((x) => {
        if(newArray.indexOf(x) === -1) {
            newArray.push(x);
        }
    })    
    return newArray;
}

/*
 These methods will not be able to remove duplicates of the form of '**' marked in sampleArray, for that 
 we would need a deep checker function which checks types and length of objects intensively
*/
console.log(removeDuplicatesUsingSet(arr));
console.log(removeDuplicatesUsingIncludes(arr));
console.log(removeDuplicatesUsingReduce(arr));
console.log(removeDuplicatesUsingIndexOf(arr));
console.log(removeDuplicatesUsingForEach(arr));

