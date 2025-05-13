let output = document.getElementById("output");

let buffer = "";



//Initialzing number buttons and adding functionality
const zero = document.getElementById("zero");
zero.addEventListener("click", function () {
    buffer += "0";
});

const one = document.getElementById("one");
one.addEventListener("click", function () {
    buffer += "1";
});

const two = document.getElementById("two");
two.addEventListener("click", function () {
    buffer += "2";
});

const three = document.getElementById("three");
three.addEventListener("click", function () {
    buffer += "3";
});

const four = document.getElementById("four");
four.addEventListener("click", function () {
    buffer += "4";
});

const five = document.getElementById("five");
five.addEventListener("click", function () {
    buffer += "5";
});

const six = document.getElementById("six");
six.addEventListener("click", function () {
    buffer += "6";
});

const seven = document.getElementById("seven");
seven.addEventListener("click", function () {
    buffer += "7";
});

const eight = document.getElementById("eight");
eight.addEventListener("click", function () {
    buffer += "8";
});

const nine = document.getElementById("nine");
nine.addEventListener("click", function () {
    buffer += "9";
});




//Addition
const additionButton = document.getElementById("addition");
additionButton.addEventListener("click", sum);

function sum() {
    if (!errorTooManyOperators("+") && !errorNoInts())
        buffer += "+";
}

//Subtraction
const subtractionButton = document.getElementById("subtraction");
subtractionButton.addEventListener("click", sub);

function sub() {
    if (!errorTooManyOperators("-") && !errorNoInts())
        buffer += "-";
}

//Multiplication
const multiplicationButton = document.getElementById("multiplication");
multiplicationButton.addEventListener("click", mult);

function mult() {
    if (!errorTooManyOperators("*") && !errorNoInts())
        buffer += "*";
}

//Division
const divisionButton = document.getElementById("division");
divisionButton.addEventListener("click", div);

function div() {
    if (!errorTooManyOperators("/") && !errorNoInts())
        buffer += "/";
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
//TODO finish errorNoInts()
function errorNoInts()
{
    switch (buffer.includes()) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            return false;
        default:
            console.error("Please input an integer before attempting any operations. The input will be cleared.")
            buffer = "";
            return true;
    }
}


//TODO add evaluation of buffer
const equals = document.getElementById("equals");
equals.addEventListener("click", eval());

function eval()
{

}

//TODO add output to screen

//TODO add live input display and output, with error messages showing in the app UI

//TODO improve UI