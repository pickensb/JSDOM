var name = prompt("What is your name?");
var place = prompt("Where are you from?");
var major = prompt("What is your major?");

document.body.querySelector(".message").innerHTML="Hello my name is "+name;

document.body.querySelector(".question").innerHTML="I am from "+place;

document.body.querySelector(".school").innerHTML="My major is "+major;