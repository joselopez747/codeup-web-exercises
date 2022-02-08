"use strict";

while(true){
var chooseANumb = Number(prompt("Choose an odd number between 1 and 50"));
    if (chooseANumb % 2 === 1 && chooseANumb <=50 && chooseANumb >= 1){
    break;
    }
}

console.log("Number to skip is: " + chooseANumb);


for (var i = 1; i <= 50; i++) {
    if (i % 2 !== 0){
        continue;
    }
    if (i == chooseANumb)
    console.log("Yikes! Skipping number: " + chooseANumb){
    continue;
}
console.log(i)
}


// for (var i = 1, i <=50; i+=2){
//     console.log(i)
// }


