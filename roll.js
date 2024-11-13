const button=document.getElementById("mybtn");
const label1=document.getElementById("roll1");
const label2=document.getElementById("roll2");
const label3=document.getElementById("roll3");
const min=1;
const max=6;
let random1,random2, random3 ;
button.onclick= function(){
    random1=Math.floor(Math.random()*max)+min;
    random2=Math.floor(Math.random()*max)+min;
    random3=Math.floor(Math.random()*max)+min;
    label1.textContent= random1;
    label2.textContent= random2;
    label3.textContent= random3;
}