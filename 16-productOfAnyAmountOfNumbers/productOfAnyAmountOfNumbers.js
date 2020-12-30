function productOfAnyAmountOfNumbers(...args) {

  let product = args[0];

  if (args.length === 1){
    return product;
  }

  for (let i = 1; i < args.length; i++){

    product *= args[i];

  }

  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;