let rows = document.querySelectorAll('.row');
const display = document.querySelector('.display');

console.log(rows);
rows.forEach((row)=>{
    row.addEventListener('click',e=>{
        button = e.target;
        display.textContent = button.textContent;
    }); 
});