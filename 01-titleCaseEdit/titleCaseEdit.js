function titleCaseEdit(title) {

  //title.toLowerCase().split(" ");

  let s = " ";

  String(title).charAt(0).toUpperCase();

  for(let i = 0; i < String(title).length; i++){

    if(String(title).charAt(i) === s){
      String(title).charAt(i+1).toUpperCase();
    }

  }
  return String(title);
}
// Do not edit this line;
module.exports = titleCaseEdit;
