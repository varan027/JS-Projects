import langs from "./info.js";

const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const knowmore = document.getElementById("more-btn");

const langname = document.getElementById("lang-name");
const langsub = document.getElementById("lang-sub");
const langinfo = document.getElementById("lang-info");

const image = document.getElementsByTagName('img');

let index = 0;

function carousel(){

  image[0].src = langs[index].img;
  langname.textContent = langs[index].name;
  langsub.textContent = langs[index].sub;
  langinfo.textContent = langs[index].info;
  knowmore.href = langs[index].link;
}

carousel();

next.addEventListener('click', ()=>{

  if(index === langs.length-1){
    index = 0;
    carousel();
  }
  else{
    index++;
    carousel();
  }
})

prev.addEventListener('click', ()=>{

  if(index == 0){
    index = langs.length;
  }
  index--;
  carousel();
})