const usrInput = document.getElementById("usrinput");

const outputResult = document.getElementById("result");
const outputEquation = document.getElementById("outputequation");

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

function finalResult(equation, result){
    outputResult.textContent = result;
    outputEquation.textContent = equation;
}

let defaultValue = 0;
    function userNumber(){
        return parseInt(usrInput.value);
    }

    function outputChange(prevValue, operator, enteredNumber){
        const clacDescription = ` ${prevValue} ${operator} ${enteredNumber}`;
        finalResult(clacDescription, defaultValue);
    }

//add function

function add(){
    let enteredValue = userNumber();
    const initialValue = defaultValue;
    defaultValue += enteredValue;
    outputChange(initialValue, '+', enteredValue);
}

//subtract function

function subtract(){
    let enteredValue = userNumber();
    const initialValue = defaultValue;
    defaultValue -= enteredValue;
    outputChange(initialValue, '-', enteredValue);
}

//multiply function

function multiply(){
    let enteredValue = userNumber();
    const initialValue = defaultValue;
    defaultValue *= enteredValue;
    outputChange(initialValue, '*', enteredValue);
}

//divide function

function divide(){
    let enteredValue = userNumber();
    const initialValue = defaultValue;
    defaultValue /= enteredValue;
    outputChange(initialValue, '/', enteredValue);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);