// var slices = 4;
// while(slices > 0){
//     console.log("I'll have a slice!");
//     slices = slices -1;
//     console.log("Now there's " + slices + " left");
// }
//
// console.log("Awwwwww .... no more pizza :(");
//

// var counter = 0;
// while(counter <= 100){
//     console.log(counter);
//     // counter = counter +1;
//     counter++;
// }
//
// console.log("first loop done");

// var counter = 100;
// while(counter >= 0) {
//     console.log(counter);
//     counter = counter -1;
// }
// console.log("I'm finally out of that loop!");

// var counter = 1;
// var number = 5;
// while(counter <= 5){
//     number = number *2;
//     console.log(number);
//     counter = counter + 1;
// }
//
// var number = 5;
// while (number < 200){
//     number = number * 2;
//     console.log(number);
// }

//* Do-while loops
// var number = Math.floor(Math.random() *6) +1;
// var guess;
//
// do{
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// } while (guess !== number);
//
// alert("your guess of " + guess + " matches the number " + number + "!");


//* For Loops

// var count = 100;
// while (count >= 0){
//     console.log(count);
//     count = count -1;
// }

// for (var count = 100; count >=0; count = count -1){
//     console.log(count);
// }
//
// // variable called i for iterator
//  for (var i = 100; i >= 0; i--){
//      console.log(i);
//  }
//
//  for (var i = 0; i <= 100; i++){
//      console.log(i);
//  }


//* Break and Continue
var string = "";
for(var i = 0; i < 8; i++){
    var word = prompt("Lets make a sentence!");
    if (word === "curses"){
        console.log("This is a respectable program!");
        // break;
        continue;
    }
    string = string + " " + word;
    console.log(string);
}