let output = document.getElementById("output");

let buffer = "";



//Initialzing number buttons and adding functionality
const zero = document.getElementById("zero");
zero.addEventListener("click", function () {
    buffer += "0";
    updateScreen(buffer);
});

const one = document.getElementById("one");
one.addEventListener("click", function () {
    buffer += "1";
    updateScreen(buffer);
});

const two = document.getElementById("two");
two.addEventListener("click", function () {
    buffer += "2";
    updateScreen(buffer);
});

const three = document.getElementById("three");
three.addEventListener("click", function () {
    buffer += "3";
    updateScreen(buffer);
});

const four = document.getElementById("four");
four.addEventListener("click", function () {
    buffer += "4";
    updateScreen(buffer);
});

const five = document.getElementById("five");
five.addEventListener("click", function () {
    buffer += "5";
    updateScreen(buffer);
});

const six = document.getElementById("six");
six.addEventListener("click", function () {
    buffer += "6";
    updateScreen(buffer);
});

const seven = document.getElementById("seven");
seven.addEventListener("click", function () {
    buffer += "7";
    updateScreen(buffer);
});

const eight = document.getElementById("eight");
eight.addEventListener("click", function () {
    buffer += "8";
    updateScreen(buffer);
});

const nine = document.getElementById("nine");
nine.addEventListener("click", function () {
    buffer += "9";
    updateScreen(buffer);
});




//Addition
const additionButton = document.getElementById("addition");
additionButton.addEventListener("click", sum);

function sum() {
    if (!errorTooManyOperators("+") && !errorNoInts()) {
        buffer += "+";
        updateScreen(buffer);
    }
}

//Subtraction
const subtractionButton = document.getElementById("subtraction");
subtractionButton.addEventListener("click", sub);

function sub() {
    if (!errorTooManyOperators("-") && !errorNoInts()) {
        buffer += "-";
        updateScreen(buffer);
    }
}

//Multiplication
const multiplicationButton = document.getElementById("multiplication");
multiplicationButton.addEventListener("click", mult);

function mult() {
    if (!errorTooManyOperators("*") && !errorNoInts()) {
        buffer += "*";
        updateScreen(buffer);
    }
}

//Division
// TODO: transalte "NaN" into "Undefined" for for numbers divided by 0
const divisionButton = document.getElementById("division");
divisionButton.addEventListener("click", div);

function div() {
    if (!errorTooManyOperators("/") && !errorNoInts()) {
        buffer += "/";
        updateScreen(buffer);
    }
}



//function that detects if there is more than one operator in the buffer
function errorTooManyOperators(str) {
    if (buffer.includes("+")) {
        switch (str) {
            case "*":
            case "-":
            case "/":
            case "+":
                console.error("Invalid expression. Please only enter the first integer, the operation, and the second integer. \n"
                    + "The expression will now be cleared.");
                buffer = "";
                return true;
            default:
                return false;
        }
    }
    else if (buffer.includes("-")) {
        switch (str) {
            case "*":
            case "+":
            case "/":
            case "-":
                console.error("Invalid expression. Please only enter the first integer, the operation, and the second integer. \n"
                    + "The expression will now be cleared.");
                buffer = "";
                return true;
            default:
                return false;
        }
    }
    else if (buffer.includes("*")) {
        switch (str) {
            case "+":
            case "-":
            case "/":
            case "*":
                console.error("Invalid expression. Please only enter the first integer, the operation, and the second integer. \n"
                    + "The expression will now be cleared.");
                buffer = "";
                return true;
            default:
                return false;
        }
    }
    else if (buffer.includes("/")) {
        switch (str) {
            case "*":
            case "-":
            case "+":
            case "/":
                console.error("Invalid expression. Please only enter the first integer, the operation, and the second integer. \n"
                    + "The expression will now be cleared.");
                buffer = "";
                return true;
            default:
                return false;
        }
    }
    else return false;
}

//checks if a number is not present in the buffer when trying to do an operation
function errorNoInts()
{
    let hasInt = /\d/.test(buffer); //regex to find if a digit exists
    console.error("Please input a number before attempting any operations.");
    return !hasInt;
}

const clear = document.getElementById("clear");
clear.addEventListener("click", function()
{
    buffer = "";
    updateScreen(buffer);
});


const equals = document.getElementById("equals");
equals.addEventListener("click", eval);

function eval()
{
    //parse the buffer to find operation & opearands
    let num1 = "";
    let num2 = "";
    let i = 0;
    while(/\d/.test(buffer.at(i)))
    {
        num1 += buffer.at(i);
        i++;
    }
    let op = buffer.at(i);
    i++;
    while(/\d/.test(buffer.at(i)))
    {
        num2 += buffer.at(i);
        i++;
    }

    let result = 0;
    switch(op)
    {
        case "+":
            result = parseInt(num1) + parseInt(num2);
            buffer = result.toString();
            break;
        case "-":
            result = parseInt(num1) - parseInt(num2);
            buffer = result.toString();
            break;
        case "*":
            result = parseInt(num1) * parseInt(num2);
            buffer = result.toString();
            break;
        case "/":
            result = parseInt(num1) / parseInt(num2);
            buffer = result.toString();
            break;
        default:
            console.error(op + " is not a valid operation. Valid operations are addition (+), subtraction (-), multiplication (*), and division (/). The expression will now be cleared.");
            buffer = "";
    }
    updateScreen(buffer);
    buffer = "";
}

function updateScreen(str)
{
    output.innerHTML = str;
}

//TODO add live input display and output, with error messages showing in the app UI