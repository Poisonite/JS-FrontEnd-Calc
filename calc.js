// !!!: Global Vars
var num1 = ""; //stores first nubmer in equation
var num2 = ""; //stores second number in equation
var operator; //stores value of the operator
var flag = false; //false if an operator hasn't been selected yet
var display = document.getElementById("display"); //short hand for this command
var equalTo = false; //flse if equal button hasn't been selected
var opString = "";

// !!!: Calc

//numbers to num1 and num2 vars function
function setValue(number){
    //clears the display if we already solved a previous problem
    if(equalTo === true){
        clearButton();
    }

    //if an operator hasn't been selected then an number is appended to the end of the num1 var
    if(flag === false){
        num1 += number;
        display.innerHTML = num1;
    }
    else{
        num2 += number;
        display.innerHTML += number;
    }
    //this stops char overflow
    if(num1.length > 10 || num2.length > 10){
        display.innerHTML = "Max Number Limit Aquired!";
    }
}

//function to add operators
function setOperator(number){
    operator = number;
    flag = true;

    //if/elseIf statements to determine which operator should be used
    if(operator === 4){
        display.innerHTML += " / ";
        opString = "/";
    }
    else if(operator === 3){
        display.innerHTML += " X ";
        opString = "*";
    }
    else if(operator === 2){
        display.innerHTML += " - ";
        opString = "-";
    }
    else if(operator === 1){
        display.innerHTML += " + ";
        opString = "+";
    }

    //ensures only a single operator is allowed
    if(flag === true){
        display.innerHTML = num1 + opString;
    }
    //clears the calc if no number has been entered but an operator was selected
    if(flag === true && num1 === ""){
        clearButton();
    }
    //clears the calc if the problem has been solved
    if(equalTo === true){
        clearButton();
    }
}

//defines settings for the clear button
function clearButton(){
    display.innerHTML = "";
    num1 = "";
    num2 = "";
    flag = false;
    equalTo = false;
}

//settings for evaluating the expression entered
function equalClick(){
    equalTo = true;
    //Turns num1 and 2 from string to numbers which can be evaluated
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = "";
    var roundedResult = "";
    
    if(operator === 1){
        result = num1 + num2;
    }
    else if(operator === 2){
        result = num1 - num2;
    }
    else if(operator === 3){
        result = num1 * num2;
    }
    else if(operator === 4){
        result = num1 / num2;
    }

    //Rounds and displays the result
    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;

    //Exception handling
    if(roundedResult === "Infinity"){
        display.innerHTML = "You cannot devide by zero";
    }
    if(roundedResult === "NaN"){
        display.innerHTML = "Invalid calculation"
    }
}

//DEL button settings
function backspace(){
    var temp1 = "";
    var temp2 = "";

    if(equalTo === true){
        clearButton();
    }
    if(flag === false){
        temp1 = num1.substring(0, num1.length-1);
        num1 = temp1;
        display.innerHTML = num1;
    }
    else if(flag === true){
        display.innerHTML = num1;
        flag = false;
    }
    if(num2 !== ""){
        temp2 = num2.substring(0, num2.length-1);
        num2 = temp2;
        flag = true;
        display.innerHTML = num1 + opString + num2;
    }
}

//allows decimal values to be added to either number or to initalize either number
function setDecimal(){
    if(flag === false){
        if(num1 === ""){
            num1="0.";
            display.innerHTML = num1;
        }
        if (num1.indexOf(".") === -1) {
            num1 += ".";
            display.innerHTML = num1;
        }
    }
    if (flag === true) {
        if(num2 === ""){
            num2 = "0.";
            display.innerHTML += num2;
        }
        if(num2.indexOf(".") === -1){
            num2 += ".";
            display.innerHTML = num1 + opString + num2;
        }
    }
}

//Clears the current number, either 1 or 2 depending on whether flag is true
function clearEntryButton(){}

//
function fraction(){}

//squares the current number, either 1 or 2 depending on whether flag is true
function square(){}

//takes the square root of the current number, either 1 or 2 depending on whether flag is true
function sqrt(){}