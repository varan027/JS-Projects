const date = new Date('2025-07-02');
const datenum = document.getElementById("date");
const monthnum = document.getElementById("month");
const yearnum = document.getElementById("year");

  datenum.textContent = date.getDate();
  monthnum.textContent = date.getMonth()+1;
  yearnum.textContent = date.getFullYear();

function timer(){
  
}
