// **Add or remove elements**
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


const place1 =["japan", "dubai","pakistan"];
const place2=["sherpur", "modhutila","gojni"];
place1.push("kasmir");

console.log(place1);
console.log(place2);
const place= place1.concat(place2)
console.log(place);
place.splice(3,1)
console.log(place);