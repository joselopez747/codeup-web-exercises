// var accessTheDOM = document.getElementById("");
//     // document is a child of window
// var showMe = accessTheDOM.innerText;
// alert(showMe);


var like = document.getElementById("like");
var dontLike = document.getElementById("dontLike");
var marvel = document.getElementById("marvel");
var dc = document.getElementById("dc");

dc.innerText = dc.innerText + ' Animated Universe';
dc.innerText += ' rocks!';

marvel.setAttribute('class', 'hotpink');
dc.setAttribute('class', 'hotpink');

var hotPinks = document.getElementsByClassName("hotpink");
// hotPinks[0].style.color = "hotpink";

//this will loop through this
for (var i = 0; i < hotPinks.length; i++){
    hotPinks[i].style.color = 'hotpink';
}


//using form input (or any user input to change elements on the page
//first get a reference to the button
var submitButton = document.querySelector("p");
// var submitButton = document.getElementById("colorSubmission");
//this creates the function that is invoked when the button is clicked
submitButton.onclick = function(){
    //this reference from the form input element
    var colorInput = document.getelementById("colorPreference");
    //this references the actual form input
    var userInput = colorInputvalue;
    //alert(userInput);
    //this references all the paragraphs on the page
    var paragraph = document.getElementsByTagName("p");
    for (var i = 0; i <paragraph.length; i++) {
        //thisloops through the list of paragraphs
        paragraph[i].style.color = userInput;
        //for each paragraph
    }
}


////using Data-Attributes/////


//get a reference to the hulk paragraph
var theHulk = document.getElementById('hulk');
//now get a reference to the data attribute
var hulkState = theHulk.getAttribute('data-state');
//output the value of the date-state attribute to the page
theHulk.innerText += ' is in ' + hulkState + ' state';



//get the value of the data-strength attribute the "new" way
var hulkStrength = theHulk.dataset.strength;

theHulk.innerText += '. His strength is ' + hulkStrength + ".";

var hulkIntelligence = theHulk.dataset.intelligence;
theHulk.innerText += ' His intelligence is ' + hulkIntelligence + '.';
