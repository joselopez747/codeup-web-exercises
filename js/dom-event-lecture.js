// //1st get access to the button in the DOM
// var button = document.querySelector('button');
//
// //Then write the event handler
// //aka event listener, callback
// function doThisWhenTheButtonIsClicked(){
//     alert ("You clicked me!");
// }
//
// //Finally we register the handler
// button.addEventListener('click', doThisWhenTheButtonIsClicked);
//
// var secondButton = document.getElementsByTagName('button')[1];
//
// secondButton.onclick = doThisWhenTheButtonIsClicked;
//
// var allTheButtons = document.getElementsByTagName('button');
// for (var i = 0; i < allTheButtons.length; i++){
//     allTheButtons[i].addEventListener('click', doThisWhenTheButtonIsClicked);
// }

// var square = document.querySelector('square');
//
//
// square.addEventListener('click', whenClicked);

var theSquare = document.querySelector('.aqua');

function whenClicked(){
    alert ("This is an aqua square");
}

theSquare.addEventListener('click', whenClicked);

///////////////
var firstButton = document.querySelector('button');

function showAlert(){
    document.querySelector('p').innerHTML = 'You clicked me!';
}

firstButton.addEventListener('click', showAlert);

/////////////
var secondButton = document.querySelectorAll('button')[1];

function overWriteText(){
    document.querySelector('p').innerHTML = 'uh-uh the user clicked me!!!!';
}
secondButton.addEventListener('click', overWriteText);