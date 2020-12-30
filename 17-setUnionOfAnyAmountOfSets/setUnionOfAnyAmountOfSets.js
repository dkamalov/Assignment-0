function setUnionOfAnyAmountOfSets(...args) {
  
  let setUnion = new Set();

  for (let i = 0; i < args.length; i++){

    for (let e of args[i]){
      
      setUnion.add(e);
  }
}
  return setUnion;

}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;