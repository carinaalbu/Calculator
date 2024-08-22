function add(n1, n2){
    return n1+n2;
}

function subtract(n1, n2){
    return n1-n2;
}

function multiply(n1, n2){
    return n1* n2;
}

function divide(n1, n2){
    return n1/n2;
}

function reverseNumber(num){
    return (-num);
}

function percentage(num){
    return (num/100);
}

function clear(){
    inputBox.value='';
    firstNumber=null;
    secondNumber=null;
    operator=null;
    expression='';
}

const inputBox = document.getElementById('inputBox');
let currentOperator=null;
let previousOperator=null;

function populate(val) {
    inputBox.value += val;
}

function operate(firstNumber, operator, secondNumber){
    switch(operator){
        case '+': return add(firstNumber,secondNumber);
        case '-': return subtract(firstNumber, secondNumber);
        case 'x': return multiply(firstNumber, secondNumber);
        case '/': return divide(firstNumber, secondNumber);
        case '+/-': return reverseNumber(firstNumber);
        case '%': return percentage(firstNumber);
    }
}


function buttonClick(event){
    const value = event.target.value;

        if (!isNaN(value)||value===',') {
            populate(value);
            if(currentOperator){
                currentOperator.classList.remove('operator-active');
            }
        } else if (value === '+' || value === '-' || value === 'x' || value === '/' || value === '%' || value === '+/-') {
            if(currentOperator){
                previousOperator=currentOperator;
            }
            firstNumber = parseFloat(inputBox.value.replace(",", "."));
            operator = value;
            inputBox.value = '';
            currentOperator = event.target;

            if(previousOperator && previousOperator !== currentOperator)
            {
                previousOperator.classList.remove('operator-active');
            }
            currentOperator.classList.add('operator-active');

        } else if (value === '=') {
            secondNumber = parseFloat(inputBox.value.replace(",", "."));
            const result = operate(firstNumber, operator, secondNumber);
            inputBox.value = result.toString().replace(".", ",");
            firstNumber = result;
            operator = null;
            secondNumber = null;
            if(currentOperator){
                currentOperator.classList.remove('operator-active');
            }
        } else if (value === 'C') {
            if(currentOperator){
                currentOperator.classList.remove('operator-active');
            }
            clear();
        }

}

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", buttonClick);
    // button.addEventListener("mouseenter", ()=> {
    //     if(button.classList.contains('orange')){
    //         button.style.backgroundColor='white';
    //         button.style.color='orange';
    //     }
    //     if(button.classList.contains('lightgrey')){
    //         button.style.backgroundColor='#C6C6C6';
    //     }
    //     if(button.classList.contains('grey')){
    //         button.style.backgroundColor='#909090';
    //     }
    // })
    // button.addEventListener("mouseleave", ()=> {
    //     if(button.classList.contains('orange')){
    //         button.style.backgroundColor='orange';
    //         button.style.color='white';
    //     }
    //     if(button.classList.contains('lightgrey')){
    //         button.style.backgroundColor='rgb(167, 167, 167)';
    //     }
    //     if(button.classList.contains('grey')){
    //         button.style.backgroundColor='rgb(75, 75, 75)';
    //     }
    // })
})


