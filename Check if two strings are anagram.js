function isAnagram(str1, str2) {
    //anagram is a word formed by rearranging the letters of another word
    //using all original letters exactly once
    let result;
    let string1 = str1.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, '');
    let string2 = str2.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, '');   //removes space as well

    if (string1.length !== string2.length) {
        result = false;
    } else {
        let sortedString1 = string1.split('').sort().join('');
        let sortedString2 = string2.split('').sort().join('');
        result = sortedString1 === sortedString2;
    }
    return result;
}

console.log(isAnagram("aab", "abb"));   //false

// isAnagram("listen", "silent")  ==> true
// isAnagram("hello", "world")  ==> false
// isAnagram("Triangle", "Integral")  ==> true
// isAnagram("rat", "car")  ==> false
// isAnagram("a", "A")  ==> true
// isAnagram("dormitory!!", "dirty room")  ==> true