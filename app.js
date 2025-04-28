let gamesequence=[];
let userseq=[];

let btns=["yellow","red","green","purple"];
let started=false;
let level= 0;
let p=document.querySelector("p");

//start the game//
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game started");
    started=true;
    levelup();
   } 
});

function levelup(){
    userseq=[];
    level++;
    p.innerText=`level ${level}`;
    let ranidx=Math.floor(Math.random()*3);
    let rancolor=btns[ranidx];
    let btn=document.querySelector(`.${rancolor}`);
    //console.log(ranidx);
   // console.log(rancolor);
    gamesequence.push(rancolor);
    console.log(gamesequence);
    btnflash(btn);//random btn//
}
function btnflash(btn){
    btn.classList.add("whiteflash");
    setTimeout(function () {
        btn.classList.remove("whiteflash");
    }, 250);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function btnpress(){
   let btn=this;
   userflash(btn);
   usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   console.log(userseq);
   checkans(userseq.length-1);
}
function userflash(btn){
    btn.classList.add("greenflash");
    setTimeout(function () {
        btn.classList.remove("greenflash");
    }, 250);
}
function checkans(idx){
if (userseq[idx]==gamesequence[idx]){
   if(userseq.length==gamesequence.length){
    setTimeout(levelup,500);
   } 
}else{
    p.innerHTML=`game over! your score is ${level}<br> <br>press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    highestscore=level;
    reset();
}
}
function reset(){
    started=false;
    gamesequence=[];
    userseq=[];
    level=0;
}



