"use strict";

//* Write a function that takes in an input and returns the string 'I have no idea what you just said';

function anyInput(string) {
    return "I have no idea what you just said";
}

console.log(anyInput("Does this work?"));

//* write a function that takes in a number and returns that number times 2
//* so if you give it 2 it returns 4
//* if you give it 100 it returns 200

function anyNumber(num){
    return num * 2
}
console.log(anyNumber(2));
console.log(anyNumber(100));

//* write a function that takes in a number and returns that number plus itself

function plusItself(num){
    return num + num;
}
console.log(plusItself(2));
console.log(plusItself(64));


//* write a function that takes in two numbers, doubles each number and then returns the sum of both numbers doubled

function doublesAndAdds(num1,num2){
    return (Math.pow(num1, 2) + Math.pow(num2,2));
}

console.log(doublesAndAdds(2,4));



//* write a function that takes in a number and squares it (that is, returns that number multiplied by itself

function numSquared(num){
    return Math.pow(num, 2);
}
console.log(numSquared(3));
console.log(numSquared(7));


//* write a function that takes in a string and returns its length

function strLength(string){
    return string.length;
}
console.log(strLength("hello"));

//* Write a function that takes in two strings and returns the sum of their lengths

function stringLength(str1,str2){
    return str1.length + str2.length;
}

console.log(stringLength('jose', 'manuel'));
console.log(stringLength('manuel', 'lopez'));

//* write a function that takes in a number and returns the string "even" or "odd" depending on whether the number is even or odd

function evenOrOdd(num) {
    if (num % 2 == 0) {
        return "even"
    } else {
        return "odd";
    }
}

console.log(evenOrOdd(8));

//Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// the array contains only string elements.
// Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]

// var Bs = ['abc', 'ab', 'cat', 'Bay']
// var noBs = Bs.replace('b', '').toLowerCase();
// function removeBs(array){
//     return noBs;
// }

function removeBsFromString(str){
    return str.replaceAll('b', '').replaceAll('B', '');
}

function removeBs(arr){
    var output = [];
    arr.forEach(function(str) {
        output.push(removeBsFromString(str));
    });
    return output;
}

console.log(removeBs(['abc', 'ab', 'cat', 'Bay']));


// Write a function, createUserMsg, that takes in a user object like the following...
// {
//     username: ‘jbomb’,
//     email: ‘john@email.com’,
//     isAdmin: true
// }
// ...and returns a string output that displays in the console like this...
// ‘User jbomb is an admin and can be reached at john@email.com’
// If jbomb were not an admin, the message should display...
// ‘User jbomb is not an admin and can be reached at john@email.com’

// function createUserMsg(username, email){
//     var username = "jbomb";
//     var email = 'john@email.com';
//     if (username && )
// }

var user = {
    username: 'jbomb',
    email: 'john@email.com',
    isAdmin: false
};

function createUserMsg(user) {
    return "User" + user.username + " is " + ((user.isAdmin) ? "" : "not ") + "an admin and can be reached at " + user.email;
}

console.log(createUserMsg(user));