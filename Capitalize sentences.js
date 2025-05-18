function capitalizeSentence(str) {
    let resultArray = [];
    resultArray = str.toLowerCase().trim().split(' ');
    const finalResult = resultArray.filter(x => x !== "").map(y => y.charAt(0).toUpperCase() + y.slice(1)).join(' ');    
    return finalResult;
}

console.log(capitalizeSentence("     hellO    WOrld    "));  //Hello World



// Input: "hello world"
// Output: "Hello World"


// Input: "javaScript is FUN"
// Output: "Javascript Is Fun"

// Input: "   multiple   spaces  "
// Output: "Multiple Spaces"


// Input: ""
// Output: ""

//trim can remove outer spaces but spaces in middle will create array elements like ["hello", "", "", "", "", "", "world"]
// to remove these use regex or filter this array for empty elements