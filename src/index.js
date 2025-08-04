import "./style.css"
import player from "./player"

const main=document.getElementById("main")
const head=document.getElementById("head")

const box=document.createElement("div")
const botBox=document.createElement("div")
main.appendChild(box);
main.appendChild(botBox)
let canPlay=false;
let player1,bot;
let arr;
let i=0;

function gA() {
    const arr = Array.from({ length: 100 }, (_, i) => i); // [0, 1, ..., 99]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Fisher-Yates shuffle
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function gg(){
   player1=new player(box);
  bot=new player(botBox,false);
  canPlay=true;
   i=0;
   arr=gA();
}


function declareWinner(u,t=true)
{   canPlay=true;
    if(!t){head.innerHTML=`Draw`;
         return;}

    head.innerHTML=`${u} won the game`
}
botBox.addEventListener("click",(e)=>{
    if(e.target.classList.contains("notAttacked")&&canPlay)
    {
       bot.attackcell(e.target.dataset.value);
       setTimeout(5000,player1.attackcell(arr[i])) 
        i++;
        if(bot.isLost()&&player1.isLost())declareWinner("Draw",false);
        else if(bot.isLost())declareWinner("Player");
        else if(player1.isLost())declareWinner("Bot");
    }
})
gg();


const rest=document.getElementById("reset");
rest.addEventListener("click",gg)

