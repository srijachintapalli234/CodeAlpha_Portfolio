const words = [
"Frontend Developer",
"Computer Science Student",
"Web Developer",
"AI Enthusiast"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

if(i < words.length){

if(!isDeleting && j <= words[i].length){

currentWord = words[i].substring(0,j++);
document.querySelector(".home-content h3").innerHTML = currentWord;
}

if(isDeleting && j >= 0){

currentWord = words[i].substring(0,j--);
document.querySelector(".home-content h3").innerHTML = currentWord;
}

if(j == words[i].length){
isDeleting = true;
}

if(isDeleting && j === 0){
currentWord = "";
isDeleting = false;
i++;

if(i === words.length){
i = 0;
}
}
}

setTimeout(type,120);
}

type();