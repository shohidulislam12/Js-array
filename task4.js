//*** */ Checking if it's an Array
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

const  fruits =["amm","jam","kathal"];
const  number  =[23,,234,5,54,64,65,4];
const  names="  a   dr  r tg  5";
const  empty=[];
console.log( "fruits is a array that is :"+ Array.isArray(fruits));
console.log( "number is a array that is :"+  Array.isArray(number));
console.log(  "names is a array that is :"+ Array.isArray(names));
console.log( "empty is a array that is :"+ Array.isArray(empty));