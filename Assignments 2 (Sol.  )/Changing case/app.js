// 1. Write a program that takes user input. Convert and show the input in capital letters.


var intro = prompt("Enter Your name!");
intro= intro.toUpperCase();
alert(intro);

// 2. Write a program that takes user input. Convert and show the input in title case.


var title = prompt("Enter Your name!");
title = title.toUpperCase();
alert(title);

// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

var mobile = prompt("Tell me your favorite mobile name!");
var length = mobile.length;
document.write(length);

// Write a program to display the last character of a user input.

var str = prompt("Enter any word!");
var last = str.charAt(str.length - 1);
document.write(last);



// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

var str = "Pakistani"
var str = str.lastIndexOf("n");
document.write(str);


// Write a program to take user input and store username in a variable. If the username contains any special symbol among (@ . , !), prompt the user to enter a valid username.

var userName=prompt("Enter your name: ");
var checkValidName = (username) => username.match(/[\@\.\,\!]/)===null;
    if (!checkValidName(userName)){
        alert("please enter a valid username");   
        userName=prompt("Enter your name: ");
    };
    document.write(userName);



// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var temp = "The quick brown fox jumps over the lazy dog";
var count = (temp.match(/the/g) || []).length;
console.log(count);

// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var userInp4 = "Pakistani";
var indexOfN = userInp4.indexOf("n");
document.write("<b>Q1. </b>The index of the letter 'n' of the word pakistani is : " + indexOfN + "<br><br>");


// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var str = "Hyderabad";
var ab = str.replace("Hyder","Islam");
document.write(ab);

// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.


var text = "Ali and Sami are best friends. They play cricket and football together."
var regex = /and/g;
var replaced = text.replace(regex, "&");
document.write(replaced);



// Write a program that takes a positive integer from user & display the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var int = parseInt(Math.round(prompt("Enter a positive integer")));
document.write(int);
var flr = parseInt(Math.floor(prompt("Enter any point value")));
document.write(flr);
var cil = parseInt(Math.ceil(prompt("Enter any point value")));
document.write(cil);



// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var int = parseInt(Math.round(prompt("Enter a positive integer")));
document.write(int);
var flr = parseInt(Math.floor(prompt("Enter any point value")));
document.write(flr);
var cil = parseInt(Math.ceil(prompt("Enter any point value")));
document.write(cil);



// Generating random numbers

// 1. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

var dice = Math.ceil(Math.random()*6);
document.write(dice);



// 2. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser. 2 = Heads and 1 = Tails

var toss = Math.ceil(Math.random()*2);
document.write(toss);


// 3. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var secnum = 4;
var usr = parseInt(prompt("Guess the secret number"));
if(secnum===usr){
    document.write("Congratulate");
}



// Converting strings to integers and decimals
// 1. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


var wt = parseFloat(prompt("Entre the weight"));
document.write(wt);




// Converting strings to numbers, numbers to strings
// 1. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// Hint: (use typeof())


var strinp = prompt("Enter a integer value in a string");
document.write("user input is " + strinp + " and its type is " + typeof(strinp) + "<br>");

var strtonum = parseInt(strinp);
document.write("user input is " + strinp + " and its type is " + typeof(strtonum));




// 2. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
document.write(parseInt(num.toString()));



// Controlling the length of decimals
// 1. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666


var percentage = 30 / 45 * 100;
document.write(percentage.toFixed(2)); 

















