"use strict";
//
// //* Write a function that takes in an input and returns the string 'I have no idea what you just said';
//
// function anyInput(string) {
//     return "I have no idea what you just said";
// }
//
// console.log(anyInput("Does this work?"));
//
// //* write a function that takes in a number and returns that number times 2
// //* so if you give it 2 it returns 4
// //* if you give it 100 it returns 200
//
// function anyNumber(num){
//     return num * 2
// }
// console.log(anyNumber(2));
// console.log(anyNumber(100));
//
// //* write a function that takes in a number and returns that number plus itself
//
// function plusItself(num){
//     return num + num;
// }
// console.log(plusItself(2));
// console.log(plusItself(64));
//
//
// //* write a function that takes in two numbers, doubles each number and then returns the sum of both numbers doubled
//
// function doublesAndAdds(num1,num2){
//     return (Math.pow(num1, 2) + Math.pow(num2,2));
// }
//
// console.log(doublesAndAdds(2,4));
//
//
//
// //* write a function that takes in a number and squares it (that is, returns that number multiplied by itself
//
// function numSquared(num){
//     return Math.pow(num, 2);
// }
// console.log(numSquared(3));
// console.log(numSquared(7));
//
//
// //* write a function that takes in a string and returns its length
// //
// function strLength(string){
//     return string.length;
// }
// console.log(strLength("hello"));
// //
// //* Write a function that takes in two strings and returns the sum of their lengths
//
// function stringLength(str1,str2){
//     return str1.length + str2.length;
// }
//
// console.log(stringLength('jose', 'manuel'));
// console.log(stringLength('manuel', 'lopez'));
//
// //* write a function that takes in a number and returns the string "even" or "odd" depending on whether the number is even or odd
//
// function evenOrOdd(num) {
//     if (num % 2 == 0) {
//         return "even"
//     } else {
//         return "odd";
//     }
// }
//
// console.log(evenOrOdd(8));
//
// //Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// // the array contains only string elements.
// // Examples...
// // removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]
//
// // var Bs = ['abc', 'ab', 'cat', 'Bay']
// // var noBs = Bs.replace('b', '').toLowerCase();
// // function removeBs(array){
// //     return noBs;
// // }
//
// function removeBsFromString(str){
//     return str.replaceAll('b', '').replaceAll('B', '');
// }
//
// function removeBs(arr){
//     var output = [];
//     arr.forEach(function(str) {
//         output.push(removeBsFromString(str));
//     });
//     return output;
// }
//
// console.log(removeBs(['abc', 'ab', 'cat', 'Bay']));
//
//
// // Write a function, createUserMsg, that takes in a user object like the following...
// // {
// //     username: ‘jbomb’,
// //     email: ‘john@email.com’,
// //     isAdmin: true
// // }
// // ...and returns a string output that displays in the console like this...
// // ‘User jbomb is an admin and can be reached at john@email.com’
// // If jbomb were not an admin, the message should display...
// // ‘User jbomb is not an admin and can be reached at john@email.com’
//
// // function createUserMsg(username, email){
// //     var username = "jbomb";
// //     var email = 'john@email.com';
// //     if (username && )
// // }
//
// var user = {
//     username: 'jbomb',
//     email: 'john@email.com',
//     isAdmin: false
// };
//
// function createUserMsg(user) {
//     return "User" + user.username + " is " + ((user.isAdmin) ? "" : "not ") + "an admin and can be reached at " + user.email;
// }
//
// console.log(createUserMsg(user));
//
//
//
// function areaOrPerimeter(length, width){
//     if(length === width){
//         return length * width;
// } else {
//     return (length + width) * 2;
// }}
//
// console.log(areaOrPerimeter(4,4));
// console.log(areaOrPerimeter(4,8))
//
//
//
//
// //write a function, sumTheStrings
// //it should take two numeric strings as input
// //it should add the numbers
// //and output the sum **as a string**
//
// //bonus: return false if the arguments
// //are anything other than numeric strings
//
// function sumTheStrings(input1, input2){
//     if (typeof input1 !== 'string' || typeof input2 !== 'string' || isNaN(parseFloat(input2)) || isNaN(parseFloat(input1))){
//         return false;
//     }
//     return (parseFloat(input1) + parseFloat(input2)).toString();
// }
//
// console.log(sumTheStrings('14', '20'));
//
// // Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
// //     Assume the following shape of the user object for the function input:
// //     {
// //         firstName: '...',
// //         lastName: '...',
// //         email: '...',
// //         username: '...',
// //         password: '...'
// //     }
// // The shape of the output should be the following:
// // {
// //     firstName: '...',
// //         lastName: '...',
// // }
// // Regardless of the case of the first name and last name input, the output should be in all lower case.
// // var fred = {
// //     firstName: 'Fred',
// //     lastName: 'Smith',
// //     email: 'fred@email.com',
// //     username: 'fred123',
// //     password: 'pass123'
// // }
// // getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}
//
//
// // Create a function, analyzeArray, that takes in a an array and returns an object with information about the passed array. The function should return an object with properties containing information about the array, including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.
// // analyzeArray([1, 2, 3]) returns...
// // {
// //     lengthOfArray: 3,
// //         containsAllStrings: false,
// //     combineResult: 6
// // }
// // analyzeArray([‘a’, ‘b’, ‘c’]) returns...
// // {
// //     lengthOfArray: 3,
// //         containsAllStrings: true,
// //     combineResult: ‘abc’
// // }
// // analyzeArray([‘bob’, 100, null]) returns...
// // {
// //     lengthOfArray: 3,
// //         containsAllStrings: true,
// //     combineResult: ‘bob123null’
// // }
//
// function analyzeArray([input]){
//     if (input !== 'number' || 'string'){
//         return false;
//     }
//         return input.length + input.length;
// }
//
// // Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
// //
// // var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
// // var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
// //
// // createNames(firstNames, lastNames) // returns...
// //
// //     [
// //     {
// //         firstName: 'CJ',
// //         lastName: 'Cat'
// //     },
// //     {
// //         firstName: 'Max',
// //         lastName: 'Feline'
// //     },
// //     {
// //         firstName: 'Claude',
// //         lastName: 'Kitten'
// //     },
// //     {
// //         firstName: 'Meowmeow',
// //         lastName: 'Calico'
// //     }
// //     ]
// //
// // HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.
//
// function createNames(arr1, arr2) {
//     var output = [];
//     var length = arr1.length;
//     for (var i = 0; i < length; i += 1){
//         output.push({
//             firstName:arr1[i],
//             lasName: arr2[i]
//         });
//     }
//     return output;
// }
//
// var firstNames = ['CJ', 'Max', 'Clause', 'Meowmeow'];
// var lastNames = ['Cat', 'Fetline', 'Kitten', 'Calico'];
// console.log(createNames(firstNames, lastNames));
//
//
// // write a function that accepts two integers and returs the remainder of dividing the larger value by the smaler value.
// //Division by zero should return NaN.
// //examples: n = 5, m =2
// //result = 2 (remainder of '17/ '5)
//
// function remainderOfDividing (input1, input2){
//     if (isNaN(parseFloat(input1)) || isNaN(parseFloat(input2))){
//         return false;
//     }
//     if (input1 > input2){
//         return input1 % input2;
//     }
//     return int2 % input1;
// }
//
//
// function printerError(string){
//     var totalOverM = 0;
//     for (var i in string) {
//         if (string[i] > "m"){totalOverM++}
//     }
//     return "" + totaloverM + "/" + string.length;
// }
//
// function isLockNessMonster(s) {
//     return (s.includes("tree fiddy"))
// }
// /////
// function parcelWeight(object){
//     return object.weight;
// }
//
// var parcel = {
//     parcelNumber: 1,
//     weight: 20
// }
//
// console.log(parcelWeight(parcel));
//
// /////
// // function totalWeight(arrayOfObjects){
// //     var total = 0;
// //     for (var i = 0; i < arrayofObjects.length; i++){
// //         total += arrayOfObjects[i].weight;
// //     }
// //     return total;
// // }
// //
// // var parcels = [{number: 1, weight: 20}, {number: 2, weight: 25}];
// //
// // console.log(totalWeight(parcel));
//
//
// ///DOM WARMUP
//
//
// // var pressButton = document.querySelector('button');
// //
// // function itsTime(){
// //     document.querySelector('h1').innerText = "Good Afternoon";
// // }
// //
// // pressButton.addEventListener('click', itsTime);
// //
// // Consider the following array of users:
//
//     var users = [
//         {
//             username: 'fsmith',
//             email: 'fsmith@email.com',
//             numberOfLogins: 23
//         },
//         {
//             username: 'ksmith',
//             email: 'ksmith@email.com',
//             numberOfLogins: 100
//         },
//         {
//             username: 'lsmith',
//             email: 'lsmith@email.com',
//             numberOfLogins: 10
//         }
//     ];
//
// // 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.
//
// function returnFirstUser(users){
//     return users[0];
// }
//
// console.log(returnFirstUser(users));
//
// // returnFirstUser(users) should return...
// //
// // {
// //     username: 'fsmith',
// //         email: 'fsmith@email.com',
// //     numberOfLogins: 23
// // }
// //
// // 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// // for all users.
//
// function returnTotalUserLogins(users){
//     var total = 0;
//     for (var i = 0; i < users.length; i += 1){
//         total += users[i].numberofLogins;
//     }
//     return total;
// }
//
// console.log(returnTotalUserLogins(users));
//
//
// // returnTotalUserLogins(users) should return... 133
// //
// // 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// // user object with the highest number of logins.
// //
// //
// // returnMostFrequentUser(users) should return...
// //
// // {
// //     username: 'ksmith',
// //         email: 'ksmith@email.com',
// //     numberOfLogins: 100
// // }

// ================================= WARM UP
//
// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:
//
// {
//     operation: 'subtract' (or 'multiply' or 'add'),
//     integer: 7 (or any positive or negative integer)
// }

// function computeOperations(operators, startingNum){
//     for (var i = 0; i < operations.length; i++)
//
// }

// Example 1...
//
// var operations1 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     }
// ]
//
//
// computeOperations(operations1, 10) // returns 20
//
//
// Example 2...
//
// var operations2 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     },
//     {
//         operation: 'multiply',
//         integer: 3
//     },
// ]
//
// computeOperations(operations2, 10) // returns 60
//
//
// Example 3...
//
// var operations3 = [
//
//     {
//         operation: 'subtract',
//         integer: 5
//     },
//     {
//         operation: 'multiply',
//         integer: -2
//     },
//     {
//         operation: 'add',
//         integer: 10
//     },
// ]
//
// computeOperations(operations3, 10) // returns 0


// Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.

// Examples:

// var nums1 = [1, 2, 3, 4, 5];
// var nums2 = [2, 2, 3, 4, 5];
// var nums3 = [10, 0, -5, 4, 5];
// var nums4 = [2, 2, -5, 2, 2];
// var nums5 = [2, 2, 2, 2, 2];
//
// function addTwos(){
//     var theTwos = 2
//     for (var i = 0; i < nums.length; i++);
//     if
// }
//
// addTwos(nums1) // returns 2
// addTwos(nums2) // returns 4
// addTwos(nums3) // returns 0
// addTwos(nums4) // returns 8
// addTwos(nums5) // returns 10

// ================================= WARM UP

// Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.
//

// function returnStringObject(str){
//     return {
//         stringValue: str,
//         stringArray: str.split('')
//     }
// }
//
// console.log(returnStringObject('hello'));
//     Examples...
//
// returnStringObject('hello') // returns...
//
// {
//     stringValue: 'hello',
//         stringArray: ['h', 'e', 'l', 'l', 'o']
// }
//
// returnStringObject('codeup') // returns...
//
// {
//     stringValue: 'codeup',
//         stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
// }

// ================================= JS WARM UP
// Write a function, countNegatives, and takes in a array of integers and returns the total number of negative numbers. 0 should be considered a non-negative number. If no negative numbers are present, return 0.
// var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
// var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
// var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
// var nums4 = [-3, -10]; // countNegatives(nums4) returns 2
//
// function countNegatives(){
//     var randomNumber = Math.ceil(Math.random() * -100) - 10;
//     for (var i = 0; i < nums.length; i++);
//
// }

// Create a function, createFirstNamesArray, that takes in an array of user objects and returns an array of first name strings. Assume that each user object has a property called 'firstName'.
//
//     Example...
//
// var users = [
//     {
//         firstName: 'Bob',
//         lastName: 'Smith',
//         email: 'bob@email.com'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         email: 'sally@email.com'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         email: 'fred@email.com'
//     },
//     {
//         firstName: 'Cathy',
//         lastName: 'Smith',
//         email: 'cathy@email.com'
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Smith',
//         email: 'joe@email.com'
//     },
// ];
//
// // createFirstNamesArray(users); // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']
//
// function createFirstNamesArray(){
//     var names = []
//     for(var i = 0; i < users.length; i++){
//         names += users[i].firstName + ',';
//     }
//     return names.split()
// }
//
// console.log(createFirstNamesArray());


//////DOM EXERCISE TO CHANGE COLOR BY CLICKING BUTTON

// var changeColorButton = document.getElementById('changeColor');
// changeColorButton.addEventListener('click', function(){
//     alert('yo');
// })


// var changeColorButton = document.querySelector("#changeColor");
// changeColorButton.addEventListener('click', function(){
//     document.getElementById('square').style.backgroundColor='red';
// });



//jquery way to do button click
// $('#changeColor').click(function(){
//     $("#square").css('background', 'red');
// });


//reset button
// document.getElementById("reset").addEventListener('click', function(){
//     location.reload();
// });


//changing the color of a square(div) by hovering over it
//jquery solution
// $(".square").hover(function(){
//     console.log(($this).attr('data-color'));
//     const $targetColor = ($this).attr('data-color');
//     $(this).css('background-color', $targetColor);
// }, function (){
//     $(this).css('background-color', '');
// });

//vanilla javascript
// document.querySelectorAll('.square').
//     forEach(function(element){
//         element.addEventListener(('mouseenter', function(){
//             const targetColor = event.target.dataset.color;
//             console.log(targetColor);
//         }));
//
// });


//Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomse ‘$’

// function encodeStr(str){
//     for (var i = 0; i < str.length; i++)
//         if (str[i] === 'a' || str[i] === 'A')
//             return (this) '@';
// };
// console.log(encodeStr('Hola'));



//solution using map
// function encodeStr(str){
    //map is used in an array
    //split the string into an array of chars
    //map over them to produce a return value that changes the three chars and returns the current charcter otherwise
    //join the chars into our final output

//     return str.split('').map(char => {
//         if (char.toLowerCase() === 'a'){
//             return '@';
//         } else if (char.toLowerCase() === 's') {
//             return '$';
//         } else if (char.toLowerCase() === 'i') {
//             return '1';
//         } else {
//             return char;
//         }
//     }).join('');
// }
//
// console.log(encodeStr('apple')); // returns ‘@pple’
// console.log(encodeStr('codeup')); // returns ‘codeup’
// console.log(encodeStr('SASS')); // returns ‘$@$$’
// console.log(encodeStr('bike')); // returns ‘b1ke’



//29Mar2022 JS Warmup
// Write a function, returnMostCommonVowel, that takes in a string and returns the most common vowel in the string.
//Assume the characters in the string are all lowercase and only 'a' 'e' 'i' 'o' 'u' count as vowels. Return the most common vowel from the string.
//
//If the highest vowel count is shared between multiple vowels, return the first vowel alphabetically. (2 'a's and 2 'e's should 'a')
//
// If no vowels are in the string return false.

// function returnMostCommonVowel(str){
//     let vowels = ('aeiou')
//     let vowelCount = 0;
//     for (var i = 0; i < str.length; i++){
//         if (str[i].vowels == 0){
//             return false;
//         } else if (str[i].vowels !== 0) {
//             return vowelCount;
//         }
//     }
// }
//
// console.log(returnMostCommonVowel("codeup"));




//30Mar2022 JS Warmup
//  ================================= WARM UP
// Create a function, returnAvgAdminSalary, that takes in an array of users and returns the average salary of all admins. Round to the nearest dollar.

// function returnAvgAdminSalary(){
//      for (var i = 0; i < users.length; i++){
//          return users;
//      }
// }


//
//     Example:
//
// function returnAvgAdminSalary(users){
//     const admin = users.filter(user => users.isAdmin);
//     return admins.reduce((accum, curr) => accum + curr.salary, 0) / admins.length;
// }

// const users = [
//     {
//         name: 'Fred',
//         isAdmin: true,
//         salary: 20000
//     },
//     {
//         name: 'Cathy',
//         isAdmin: false,
//         salary: 40000
//     },
//     {
//         name: 'Sally',
//         isAdmin: true,
//         salary: 80000
//     },
//     {
//         name: 'Kyle',
//         isAdmin: true,
//         salary: 50000
//     },
//     {
//         name: 'Cynthia',
//         isAdmin: false,
//         salary: 100000
//     }
// ];

// returnAvgAdminSalary(users) // returns 50000