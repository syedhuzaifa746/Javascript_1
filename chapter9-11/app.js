var city = prompt("Enter Your city name!");

if(city=="karachi"){
   alert("welcome to the city of lights!");
}

var gender = prompt("Enter Your Gender!")
if(gender == "male") {
    alert("Good Morning Sir")
}
 else { alert("Good Morning Maam")
}

var fuel = prompt("Tell me remaining fuel in Your car (in litres)!");
if(fuel < "0.25 litres"){
    alert("Please refill the fuel in your car");
} else{
    alert("Your fuel is okay");
}

var a = 4; 

if (++a === 5) {
    alert("given condition for variable a is true");
} 

// true message is not showing as output
var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
} 

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
} if (c === 13) {
    alert("condition 2 is true");
} if (++c < 14) {
    alert("condition 3 is true");
} if (c === 14) {
    alert("condition 4 is true");
}



var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 

if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
} 



if (true){ 
    alert("True"); 
} if (false){
    alert("False"); } 
 


var secretnum = 5;
var guess = prompt("Guess the secret number");
var b = ++secretnum;

if(secretnum==guess){
    alert("Bingo! Correct answer");
if(guess==b){
    alert("Close enough to the correct answer");
}
}




var divisible = prompt("Enter the number which you want to divide by 3");
divisible = + divisible

if(divisible=(divisible/3)){
    alert("it is divisible by 3");
}



// program to check if the number is even or odd
// take input from the user
 
var number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    alert("The number is even.");
}

// if the number is odd
else {
    alert("The number is odd.");
}



var temperature = prompt("Tell me your area temperature");

if(temperature>40){
    alert("It is too hot outside");
    if(temperature>30){
        alert("The Weather today is Normal");
    }
    if(temperature>20){
        alert("Todays Weather is cool");
    }
    if(temperature>10){
        alert("OMG! Todays weather is so Cool.");
    }
}


