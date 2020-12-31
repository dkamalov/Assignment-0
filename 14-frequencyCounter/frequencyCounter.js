function frequencyCounter(word) {
  
  let wordArray = word.split("");
  let frequency = {};

  for (let i = 0; i <= word.length; i++){

    let l = wordArray[i];
    
    if (wordArray.hasOwnProperty(i)){

      if(!frequency[l]){
        frequency[l] = 0;
      } 

      frequency[l]++;
    }
  }

  return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;
