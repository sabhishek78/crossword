function crossWord(matrix, str){
//extract horizontal Strings
let rows=matrix.length;
let columns=matrix[0].length;
let horizontalStrings=[];
for(let i=0;i<rows;i++){
  horizontalStrings.push(extractRowString(matrix[i]));
}
// console.log("Horizontal Strings");
// console.log(horizontalStrings);
let verticalStrings=[];
let transposedMatrix=transpose(matrix);
// console.log(transposedMatrix);
for(let i=0;i<columns;i++){
  verticalStrings.push(extractRowString(transposedMatrix[i]));
}
// console.log("Vertical Strings");
// console.log(verticalStrings);
let diagonalStrings=[];
diagonalStrings=extractDiagonalString(matrix);
// console.log("Diagonal Strings");
// console.log(diagonalStrings);
let newMatrix=[];
 
for(let i=0;i<transposedMatrix.length;i++){
  newMatrix.push(transposedMatrix[i].reverse());
}
// console.log("new Matrix");
// console.log(newMatrix);
let diagonalStrings2=[];
diagonalStrings2=extractDiagonalString(newMatrix);
// console.log("Diagonal Strings2");
// console.log(diagonalStrings2);
let allStrings=[];
for(let i=0;i<horizontalStrings.length;i++){
  allStrings.push(horizontalStrings[i]);
  allStrings.push(reverseString(horizontalStrings[i]));
}
for(let i=0;i<verticalStrings.length;i++){
  allStrings.push(verticalStrings[i]);
  allStrings.push(reverseString(verticalStrings[i]));
}
for(let i=0;i<diagonalStrings.length;i++){
  allStrings.push(diagonalStrings[i]);
  allStrings.push(reverseString(diagonalStrings[i]));
}
for(let i=0;i<diagonalStrings2.length;i++){
  allStrings.push(diagonalStrings2[i]);
  allStrings.push(reverseString(diagonalStrings2[i]));
}
// console.log("All Strings");
// console.log(allStrings);
for(let i=0;i<allStrings.length;i++){
  if(allStrings[i].includes(str)){
    return true;
  }
}
return false;
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
function extractRowString(row){
  let string='';
  for(let i=0;i<row.length;i++){
    string+=row[i];
  }
  return string;
}
function extractDiagonalString(matrix){
  let rows=matrix.length;
  let columns=matrix[0].length;
  let diagonalStrings=[];
  for(let k=0;k<rows;k++){
    let string='';
    for(let i=k,j=0;i<rows && j<columns;i++,j++){
       string+=matrix[i][j];
     }
     diagonalStrings.push(string);
  }
  for(let k=1;k<columns;k++){
    let string='';
    for(let i=0,j=k;i<rows && j<columns;i++,j++){
       string+=matrix[i][j];
     }
     diagonalStrings.push(string);
  }
 return diagonalStrings;
}
function transpose(original) {
    var copy = [];
    for (var i = 0; i < original.length; ++i) {
        for (var j = 0; j < original[i].length; ++j) {
            // skip undefined values to preserve sparse array
            if (original[i][j] === undefined) continue;
            // create row if it doesn't exist yet
            if (copy[j] === undefined) copy[j] = [];
            // swap the x and y coords for the copy
            copy[j][i] = original[i][j];
        }
    }
    return copy;
}


console.log(crossWord([['a','b','c','d'],['a','b','c','d'],['a','b','c','d'],['a','b','c','d']],"aaaa"));