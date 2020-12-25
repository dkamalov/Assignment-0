function titleCaseEdit(title) {

//Split into array 
  let t = title.split(' ');

  for (let i = 0; i < t.length; i++) {

//Capitilize the first one
      t[i] = t[i].charAt(0).toUpperCase() + t[i].substring(1);     
  }

//Put it back into a string
  return t.join(' '); 
}
// Do not edit this line;
module.exports = titleCaseEdit;
