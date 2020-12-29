function fizzBuzz(start, end) {
  
  let outArray = [];

  for (let i = start; i <= end; i++){
    
    if(i % 3 === 0 && i % 5 === 0){
      outArray.push("FizzBuzz");
  
    }

    else if(i % 3 === 0){
      outArray.push("Fizz");
     
    }

    else if(i % 5 === 0){
      outArray.push("Buzz");
      
    } 
    
    else{
      outArray.push(i);
    }
  }

  return outArray;
}

// Do not edit this line;
module.exports = fizzBuzz;