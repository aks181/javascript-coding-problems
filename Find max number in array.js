function findMaxNumber(arr) {
    if (arr.length === 0) {
        return null;
    }

    let max = arr[0];
    arr.forEach(item => {
        if (item >= max) {
            max = item;
        }
    })
    return max;
}

findMaxNumber();

// findMaxNumber([1, 2, 3, 4, 5])      // → 5  
// findMaxNumber([-10, -20, -3, -1])   // → -1  
// findMaxNumber([42])                 // → 42  
// findMaxNumber([])                   // → null  
// findMaxNumber([100, 100, 100])      // → 100