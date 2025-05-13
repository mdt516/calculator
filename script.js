let output = document.getElementById("output");

let buffer = "";

//Initialzing buttons and adding functionality
const zero = document.getElementById("zero");
const one = document.getElementById("one");
one.addEventListener("click", function() {
    buffer += "1";
});

const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");


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
