// // Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).


// var A = 65;
// var Z = 90;
// var a = 97;
// var z = 122;

// var A = A
// var A = [typeof(A)];
// alert (A);

// var Z = Z
// var Z = [typeof(Z)];
// alert (Z);


// var a = a
// var a = [typeof(a)];
// alert (a);


// var z = z
// var z = [typeof(z)];
// alert (z);



// var a = prompt("Enter first number");
// var b = prompt("Enter second number");

// if (a > 0 && b > 0 && a > b) {
//     document.write("The larger number is " + a);
// } else if (a > 0 && b > 0 && a < b) {
//     document.write("The larger number is " + b);
// } else if (a === b && a > 0 && b > 0) {
//     document.write("Both numbers are equal!")
// } else {
//     document.write("Please add an integer!");

// }





//   Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var number = prompt("Enter any integer! ");

// if (number > 0) {
//     console.log("The Number is positive!");
// }

// else if (number == 0) {
//     console.log("The number is zero");
// }

// else{
//     console.log("The number is Negative");
// }





// function isVowel(argument){

// 	var text;
// 	var argument = argument.toLowerCase();

//     var vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (var i = 0; i <= vowels.length; i++){
//         if (argument != vowels[i]) {
//             continue;
//         }
//         return true;
//     }
//     return false;
// }

// // See if "A" is a vowel
// var char = "A";

// if (isVowel(char)) {
// 	console.log(char + " is a vowel");
// } else {
// 	console.log(char + " is not a vowel");
// }




// 5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.



// var correct_password = ("pass123");
// var user_password = prompt("Enter your password");

// if(user_password == correct_password ) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("try again");
// }



// This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }


// var greeting ; 
// var hour = 13;

// if (hour < 18) {
//      greeting = "Good day";}
//       else greeting = "Good evening"; 

// alert(greeting);



// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements




