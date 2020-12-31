function titleCaseEdit(title) {

  let t = title.split(' ');

  for (let i = 0; i < t.length; i++) {
      t[i] = t[i].charAt(0).toUpperCase() + t[i].substring(1);     
  }
  return t.join(' '); 
}
// Do not edit this line;
module.exports = titleCaseEdit;
