import gameboard from "./gameboard.js"
class player
{
    constructor(e,as=true)
    {  this.matrix = Array.from({ length: 10 }, () => Array(10).fill(-1));
    this.isHuman=as;
    this.gameboard=new gameboard();
    e.innerHTML="";
    if(this.isHuman)
        {e.classList.add("player");}
    e.classList.add("ground")
        for(let i=0; i<10; i++)
        {for(let j=0; j<10; j++)
              {
                   const cell=document.createElement("div");
                   this.matrix[i][j]=cell;
                   cell.dataset.value=i*10+j;
                   cell.classList.add("area");
                   if(this.gameboard.grid[i][j]>0)cell.classList.add("ship");
                   cell.classList.add("notAttacked");
                   e.appendChild(cell);                  
              }
           
        }
    }
    attack(z)
    {
        let x=parseInt(z.dataset.value);
        let i=parseInt(x/10);
        let j=x%10;
         console.log(`Attacked ${i} ${j}`)
        let g=this.gameboard.recieveAttack(i,j);
        z.classList.remove("notAttacked");
        if(g==='Ship' ||g=== "Ship Sunked"){
            z.classList.remove("ship")
            z.innerHTML="X";
             z.classList.add("attackedShip")}
       else {
        z.innerHTML="O"
        z.classList.add("attacked");}
    }
    isLost()
    {
        return this.gameboard.isLost();
    }
    attackcell(x){
        let i=parseInt(x/10);
        let j=x%10;
        console.log("Bot attacked")
        let g=this.gameboard.recieveAttack(i,j);
        let z=this.matrix[i][j];
        z.classList.remove("notAttacked");
        if(g==='Ship' ||g=== "Ship Sunked"){
            z.classList.remove("ship")
            z.innerHTML="X";
             z.classList.add("attackedShip")}
       else {
        z.innerHTML="O"
        z.classList.add("attacked");}

    }
}

export default player;