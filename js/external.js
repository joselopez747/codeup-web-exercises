"use strict";

console.log("Hello from external JavaScript");
//alert("Welcome to my Website!");


//var userInput = prompt("What is your favorite color?");
//alert("Great, " + userInput + " is my favorite color too!");


// var pricePerDayInDollars = 3;
// var littleMermaid = Number(prompt("How many days do you want to rent The Little Mermaid for?"));
// var brotherBear = Number(prompt("How many days do you want to rent Brother Bear for?"));
// var hercules = Number(prompt("How many days do you want to rent Hercules for?"));
//
// var totalPrice = (littleMermaid + brotherBear + hercules) * pricePerDayInDollars;
// alert("Great, that will be $" + totalPrice);


var googlePayInDollars = Number(prompt("How much does Google pay you per hour?"));
var googlePay = Number(prompt("How many hours did you work for Google this week?"));
var amazonPayInDollars = Number(prompt("How much does Amazon pay you per hour?"));
var amazonPay = Number(prompt("How many hours did you work for Amazon this week?"));
var facebookPayInDollars = Number(prompt("How much does Facebook pay you per hour?"));
var facebookPay = Number(prompt("How many hours did you work for Facebook this week?"));

var totalPay = (googlePay * googlePayInDollars) + (amazonPay * amazonPayInDollars) + (facebookPay * facebookPayInDollars);
alert("You made $" + totalPay + " this week!");

// //
// var classNotFull = false;
// var noScheduleConflict = false;
// var canEnroll = (classNotFull && noScheduleConflict);
// alert("It is " + canEnroll + " that you can enroll in this class");





