let output = document.getElementById("output");

let buffer = "";

//Initialzing buttons and adding functionality
const zero = document.getElementsByName("0");
const one = document.getElementsByName("1")
one.addEventListener("click", function() {
    buffer += "1";
    console.log(buffer);
});

const two = document.getElementsByName("2");
const three = document.getElementsByName("3");
const four = document.getElementsByName("4");
const five = document.getElementsByName("5");
const six = document.getElementsByName("6");
const seven = document.getElementsByName("7");
const eight = document.getElementsByName("8");
const nine = document.getElementsByName("9");


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
