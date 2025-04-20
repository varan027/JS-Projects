const decre = document.getElementById("decrementer");
const incre = document.getElementById("incrementer");
const reset = document.getElementById("reseter");
const number = document.getElementById("num");

incre.addEventListener("click",()=>{
  number.textContent++;
})

decre.addEventListener("click",()=>{
  number.textContent--;
})

reset.addEventListener("click",()=>{
  number.textContent = 0;
})