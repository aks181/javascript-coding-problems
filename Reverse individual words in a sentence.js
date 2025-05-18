function reverseWords(sentence) {
  const wordsArray = sentence.split(" ");
  let reverseWordsArray = [];

  wordsArray.forEach((word) => {
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverse += word.charAt(i);
    }
    reverseWordsArray.push(reverse);
  });

  return reverseWordsArray.join(" ");
}

console.log(reverseWords("  Lead  and Trail  "));

// reverseWords("Hello World")           // → "olleH dlroW"
// reverseWords("JavaScript is fun")     // → "tpircSavaJ si nuf"
// reverseWords("  Lead  and Trail  ")   // → "  daeL  dna liarT  "
// reverseWords("")                      // → ""
// reverseWords("OneWord")               // → "droWenO"
