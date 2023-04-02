var name =	prompt("Please input your name:"); 
var gend = prompt("Please input your gender (type M or F):");
var user = prompt("Please input your username:");
var description = prompt("Say something about yourself:");
var bdayyear = prompt("What year were you born?");
var currentage = 2023 - bdayyear;
var userimg = prompt("Please input a file name for your picture");

document.getElementById("fname").innerHTML = name;
document.getElementById("gender").innerHTML = gend;
document.getElementById("username").innerHTML = user;
document.getElementById("desc").innerHTML = description;
document.getElementById("year").innerHTML = bdayyear;
document.getElementById("age").innerHTML = currentage;
document.getElementById("ppic").src = userimg;

