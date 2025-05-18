function countVowels(string) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string.charAt(i).toLowerCase())) {
      count++;
    }
  }
  return count;
}

//check has to be case-insensitive
console.log(countVowels("JavAscript")); //3

//faster way to lookup in case of larger inputs
function countVowelsUsingSet(string) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let char of string.toLowerCase()) {  //simple for loop like above can also be used
    if (vowels.has(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowelsUsingSet("JavAscript")); //3
