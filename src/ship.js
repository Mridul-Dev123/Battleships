function createShip(d)
{
    let len=d;
    let hits=0;
    let isBreak=false;
    function hit(){
        if(!isBreak)hits++;
        if(hits==len)isBreak=true;
    }
    function isSunk(){
        return isBreak;
    }
    return {hit, isSunk};
}
export default createShip;