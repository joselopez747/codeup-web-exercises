"use strict";

// alert("Hello, world");

// var userChoice = confirm("Are you sure you don't want to buy something?");
// console.log(userChoice);
//
// if(userChoice){
//     alert("Wise choice!");
// } else {
//     alert("Booooo! Good bye!");
// }

var currentSpeed = Number(prompt("How fast are you driving now?"));
console.log(currentSpeed);
var plannedSpeedIncrease = Number(prompt("How much faster do you want to go?"));

// you can now get the correct result either this way:
var newSpeed = currentSpeed + plannedSpeedIncrease;
console.log("Your planned speed is " + newSpeed);
// or this way:
//console.log("Your planned speed is " + (currentSpeed + plannedSpeedIncrease));

var distanceLeft = Number(prompt("How many miles are you from your destination?"));

var timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
var timePlannedSpeed = (distanceLeft/newSpeed) * 60;
var timeGain = (timeAtCurrentSpeed - timePlannedSpeed);
alert("If you drive at " + newSpeed + " mph, you will arrive " + timeGain.toFixed(2) + " minutes sooner.");


