const displayTime=document.querySelector(".displayTime");
const startBtn=document.querySelector("#startBtn");
const stopBtn=document.querySelector("#stopBtn");
const resetBtn=document.querySelector("#resetBtn");

let stratTime, updatedTime,difference;
let running=false;
let tInterval;

resetBtn.addEventListener('click',()=>{
    clearInterval(tInterval);
    running=false;
    difference=0;
    displayTime.textContent="00:00:00:00";
});

startBtn.addEventListener('click',()=>{
    if(!running){
        stratTime=new Date().getTime()-(difference||0);
        tInterval=setInterval(getShowTime,10);
        running=true;
    }
});

stopBtn.addEventListener('click',()=>{
    if(running){
        clearInterval(tInterval);
        difference=new Date().getTime()-stratTime;
        running=false;
    }
})

const getShowTime=()=>{
    updatedTime=new Date().getTime();
    difference=updatedTime-stratTime;

    let hours=Math.floor((difference%(1000*60*60*24))/(1000*60*60)).toString().padStart(2,'0');
    let minutes=Math.floor((difference%(1000*60*60))/(1000*60)).toString().padStart(2,'0');
    let seconds=Math.floor((difference%(1000*60))/(1000)).toString().padStart(2,'0');
    let milliseconds=Math.floor((difference%(1000))/(10)).toString().padStart(2,'0');

    displayTime.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
};