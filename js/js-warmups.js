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



function areaOrPerimeter(length, width){
    if(length === width){
        return length * width;
} else {
    return (length + width) * 2;
}}

console.log(areaOrPerimeter(4,4));
console.log(areaOrPerimeter(4,8))




//write a function, sumTheStrings
//it should take two numeric strings as input
//it should add the numbers
//and output the sum **as a string**

//bonus: return false if the arguments
//are anything other than numeric strings

function sumTheStrings(input1, input2){
    if (typeof input1 !== 'string' || typeof input2 !== 'string' || isNaN(parseFloat(input2)) || isNaN(parseFloat(input1))){
        return false;
    }
    return (parseFloat(input1) + parseFloat(input2)).toString();
}

console.log(sumTheStrings('14', '20'));

// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//     Assume the following shape of the user object for the function input:
//     {
//         firstName: '...',
//         lastName: '...',
//         email: '...',
//         username: '...',
//         password: '...'
//     }
// The shape of the output should be the following:
// {
//     firstName: '...',
//         lastName: '...',
// }
// Regardless of the case of the first name and last name input, the output should be in all lower case.
// var fred = {
//     firstName: 'Fred',
//     lastName: 'Smith',
//     email: 'fred@email.com',
//     username: 'fred123',
//     password: 'pass123'
// }
// getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}


// Create a function, analyzeArray, that takes in a an array and returns an object with information about the passed array. The function should return an object with properties containing information about the array, including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.
// analyzeArray([1, 2, 3]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: false,
//     combineResult: 6
// }
// analyzeArray([‘a’, ‘b’, ‘c’]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘abc’
// }
// analyzeArray([‘bob’, 100, null]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘bob123null’
// }

function analyzeArray([input]){
    if (input !== 'number' || 'string'){
        return false;
    }
        return input.length + input.length;
}

// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
//
// var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
//
// createNames(firstNames, lastNames) // returns...
//
//     [
//     {
//         firstName: 'CJ',
//         lastName: 'Cat'
//     },
//     {
//         firstName: 'Max',
//         lastName: 'Feline'
//     },
//     {
//         firstName: 'Claude',
//         lastName: 'Kitten'
//     },
//     {
//         firstName: 'Meowmeow',
//         lastName: 'Calico'
//     }
//     ]
//
// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.

function createNames(arr1, arr2) {
    var output = [];
    var length = arr1.length;
    for (var i = 0; i < length; i += 1){
        output.push({
            firstName:arr1[i],
            lasName: arr2[i]
        });
    }
    return output;
}

var firstNames = ['CJ', 'Max', 'Clause', 'Meowmeow'];
var lastNames = ['Cat', 'Fetline', 'Kitten', 'Calico'];
console.log(createNames(firstNames, lastNames));