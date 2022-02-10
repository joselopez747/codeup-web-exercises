var groceryList = ['bread', 'eggs', 'butter', 'milk'];
console.log(groceryList[2]);
console.log("I have to buy " + groceryList[0]);

//create an array of four family members, friends, or people or pets you know.
//console.log the first and last item.

var family = ['Jose','Estefhaney','Erik', 'Abigail'];
console.log(family[0], family[3]);

//console.log a string stating your relationship to one of the array elements, for example "Nathan is my cousin" or "Sofia is my friend."

console.log(family[3] + " is my younger sister.");


for (var i = 0 ; i < groceryList.length; i++) {
    if (i !== groceryList.length - 1) {
    console.log("I have to buy " + groceryList[i] + " and...");
} else {
    console.log("I have to buy " + groceryList[i] + ".")
    }

}


// Given an array
var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// First, create a for loop that generates the output:
//     ```
// San Antonio
// Austin
// Dallas
// Houston
// ```
// Then elaborate on the loop output to generate output like:
//     ```
// Student number 1 lives in San Antonio
// Student number 2 lives in Austin
// Student number 3 lives in Dallas
// Student number 4 lives in Houston
// ```
// Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.


for (var i = 0; i < cities.length; i++){
        console.log("Student number " + (i + 1) + " lives in " + cities[i]);
}



//* ForEach Loop
var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
prices.forEach(function(price, index){
    console.log("Item number " + (index + 1 ) + " costs $" + price);
})



//* Manipulating arrays
//push is to insert item at end of the array
groceryList.push("potatoes");
console.log(groceryList);
//pop is to delete item at the end of the array
groceryList.pop();
console.log(groceryList);


//unshift is to add item to the beginning of the array
groceryList.unshift("sliced cheddar");
console.log(groceryList);
//shift is to delete item from the beginning of the array
groceryList.shift();
console.log(groceryList);

var indexofButter = groceryList.indexOf("butter");
console.log("The butter is at index " + indexofButter);


groceryList[2] = "peanut butter";
console.log(groceryList);

groceryList[indexofButter] = "butter";
console.log(groceryList);

var firstHalfOfList = groceryList.slice(0, 2);
console.log(firstHalfOfList);

//if you want the second half of a list you dont need a second number.
//if you want just a specific part of the list you need a two numbers.
var secondHalfOfList = groceryList.slice(2, );
console.log(secondHalfOfList);

firstHalfOfList.push("peanut butter");
console.log(firstHalfOfList);

groceryList = firstHalfOfList.concat(secondHalfOfList);
console.log(groceryList);

//rearranges the array from last to first
groceryList.reverse();
console.log(groceryList);


// arranges the array alphabetically (only if all words start in the same case ex. all upper case or all lower case.
groceryList.sort()
console.log(groceryList);


//this is to make a "string" (quotes) into an array use this
//if you want to get rid of the commas or periods or anything specific use the .replace method
// .replace only replaces the first one and .replaceAll replaces all of what you want to replace
var hamletQuote = "To be or not to be, that is the question";
var noCommasHamletQuote = hamletQuote.replace(',', '').toLowerCase();
var hamletQuoteArray = noCommasHamletQuote.split(' ');

console.log(hamletQuoteArray);
hamletQuoteArray.reverse();
console.log(hamletQuoteArray);

var hamletQuoteBackwards = hamletQuoteArray.join(' ');
console.log(hamletQuoteBackwards);
var hamletQuoteWordList = hamletQuoteArray.join(',');
console.log(hamletQuoteWordList);
var bringBackTheOriginal= hamletQuoteWordList.replaceAll(',', ' ');
var theOriginalArray = bringBackTheOriginal.split(" ");
theOriginalArray.reverse();
var theOriginalQuote = theOriginalArray.join(' ');
console.log(theOriginalQuote);