let rows = document.querySelectorAll('.row');
const display = document.querySelector('.display');
let operator;
let firstNumber;
let secondNumber;



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
    }); 
});


function operate(operator,a,b){
    return operations[operator](a,b);
}

// console.log(operate('-',123,23));

