const historytab = document.getElementById("history-tab");
const visiontab = document.getElementById("vision-tab");
const goalstab = document.getElementById("goals-tab");

const historytext = document.getElementById("history-text");
const visiontext = document.getElementById("vision-text");
const goalstext = document.getElementById("goals-text");

const textcont = document.getElementById("text-container");

function yellowtab(){
  textcont.style.display = 'block'
}

historytab.addEventListener('click', ()=>{
  historytext.style.display = 'block';
  visiontext.style.display = 'none';
  goalstext.style.display = 'none';
  yellowtab();
})

visiontab.addEventListener('click', ()=>{
  visiontext.style.display = 'block';
  goalstext.style.display = 'none';
  historytext.style.display = 'none';
  yellowtab();
})

goalstab.addEventListener('click', ()=>{
  goalstext.style.display = 'block';
  visiontext.style.display = 'none';
  historytext.style.display = 'none';
  yellowtab();
})