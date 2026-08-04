const playBtn=document.getElementById("play");

const progress=document.getElementById("progress");

let playing=false;

playBtn.addEventListener("click",()=>{

playing=!playing;

if(playing){

playBtn.innerHTML='<i class="fas fa-pause"></i>';

simulate();

}

else{

playBtn.innerHTML='<i class="fas fa-play"></i>';

}

});

function simulate(){

let value=0;

const interval=setInterval(()=>{

if(!playing){

clearInterval(interval);

return;

}

value++;

progress.value=value;

if(value>=100){

playing=false;

progress.value=0;

playBtn.innerHTML='<i class="fas fa-play"></i>';

clearInterval(interval);

}

},200);

}

const search=document.getElementById("search");

const cards=document.querySelectorAll(".card");

search.addEventListener("keyup",()=>{

const text=search.value.toLowerCase();

cards.forEach(card=>{

const title=card.innerText.toLowerCase();

card.style.display=

title.includes(text)

?"block"

:"none";

});

});
