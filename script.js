let rows = document.querySelectorAll('.row');
const display = document.querySelector('.display');
let operator;
let firstNumber;
let secondNumber;
let operationDisplayed = false;



const operations = {
    "+": function(a,b){
        return a+b;
    },
    "-": function(a,b){
        return a-b;
    },
    "*": function(a,b){
        return a*b;
    },
    "/": function(a,b){
        return a/b;
    },
}


// console.log(operations);

rows.forEach((row)=>{
    row.addEventListener('click',e=>{
        button = e.target;
        displayButton(button);
    }); 
});


function fixResult(result){
    let counter = 0;
    result = String(result);
    if(!result.includes('.')) return Number(result);

    if(!result[0]==0) return Number(result);
    for(let i = result.length-1;i>=0;i--){
        if(result[i]!=0) break;
        counter++; 
    }
    result = result.slice(0,0-counter);
    return result;
}


function operate(operator,a,b){
    let result = operations[operator](Number(a),Number(b));
    if(!String(result).includes('.')) return result;
    return fixResult(result);
    
}

function validateValue(value){
    if(value == "+" || value == "-" || value == "*" || value == "/") return false;
    return true;
}


function displayButton(button){
    if(button.classList == "row") return;

  

    if(button.classList == "clear"){
        display.textContent = "0";
        firstNumber = 0;
        secondNumber = 0;
        operator = "";
        return;
    }

 

    if(button.classList == "operation" && firstNumber){
        firstNumber = display.textContent;
        console.log(firstNumber);
    }
    if(button.classList == "equal"){
        secondNumber = display.textContent;
        display.textContent = operate(operator,firstNumber,secondNumber);
        console.log(operator,firstNumber,secondNumber);
        return;
    } 

    

    if(button.classList == "operation"){
        if(validateValue(display.textContent))firstNumber = display.textContent;
        display.textContent = button.textContent;
        operator = display.textContent;
        operationDisplayed = true;
        return;
    } 
    if(operationDisplayed){
        display.textContent = button.textContent;
        operationDisplayed = false;
        return;
    } else if(button.classList == 'dot'){
        if(display.textContent.includes('.')) return;
        display.textContent+=button.textContent;
    }else if(button.classList == 'zero'){
        if(display.textContent=="0") return;
        display.textContent+=button.textContent;
    }else{
        if(display.textContent == "0") display.textContent ="";
        display.textContent+=button.textContent;
        return;
    }   

   
}
// console.log(operate('-',123,23));

