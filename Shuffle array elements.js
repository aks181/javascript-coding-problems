function shuffleArray(array) {
  let copy = array.slice(); //making a copy in case you dont want to mutate the original one

  for (let i = copy.length - 1; i > 0; i--) {   // no need to go till i=0, since only 1 element left no sense to shuffle
    const randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = copy[i];
    copy[i] = copy[randomIndex];
    copy[randomIndex] = temp;

    // [copy[i], copy[j]] = [copy[j], copy[i]]  //can also be done to swap
  }

  return copy;
}

console.log(shuffleArray([1, 2, 3, 4, 5])); // [3,1,4,2,5]

//Fisher Yates Shuffle(knuth) Algorithm specifies the most uniform/unbiased way to randomize/shuffle array elements
//starting from the end and generate a random index and swap the element with this element
//key is to randomize only the left sample size after swapping
//no need to generate random index in whole sample size




//Math.random() generates random no between 0 and 1

//To get random numbers from 0, multiply it by n then it will generate numbers between 0 and n(excluding n)
//between 0 and 5, Math.random()*5

//To get between a range of min-max, Math.random()*(max-min) + min [excludes max]
//between 5 and 10 --> Math.random()*5 + 5

//to include max, Math.random()*(max-min+1) + min
//between 10 and 20(inclusive) --> Math.random()*11 + 10
