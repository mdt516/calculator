let output = document.getElementById("output");

let buffer = "";

//Initialzing buttons and adding functionality
const zero = document.getElementById("zero");
zero.addEventListener("click", function() {
    buffer += "0";
});

const one = document.getElementById("one");
one.addEventListener("click", function() {
    buffer += "1";
});

const two = document.getElementById("two");
two.addEventListener("click", function() {
    buffer += "2";
});

const three = document.getElementById("three");
three.addEventListener("click", function() {
    buffer += "3";
});

const four = document.getElementById("four");
four.addEventListener("click", function() {
    buffer += "4";
});

const five = document.getElementById("five");
five.addEventListener("click", function() {
    buffer += "5";
});

const six = document.getElementById("six");
six.addEventListener("click", function() {
    buffer += "6";
});

const seven = document.getElementById("seven");
seven.addEventListener("click", function() {
    buffer += "7";
});

const eight = document.getElementById("eight");
eight.addEventListener("click", function() {
    buffer += "8";
});

const nine = document.getElementById("nine");
nine.addEventListener("click", function() {
    buffer += "9";
});


//Addition
const additionButton = document.getElementById("addition");
additionButton.addEventListener("click", sum);

function sum(num1, num2)
{
    output.innerHTML = num1 + num2;
}

function sub(num1, num2)
{
    return num1 - num2;
}

function mult(num1, num2)
{
    return num1 * num2;
}

function div(num1, num2)
{
    return num1 / num2;
}
