import createShip from "./ship";

class gameboard{
    constructor()
    { 
        this.grid = Array.from({ length: 10 }, () => Array(10).fill(-1));        
        this.grid[0][0]=1;
        this.grid[0][1]=1;
        this.grid[0][2]=1;
        this.arr=[createShip(3),createShip(3),createShip(4),createShip(5)];
        this.grid[0][7]=2;
        this.grid[1][7]=2;
        this.grid[2][7]=2;
        this.grid[3][7]=2;
        this.grid[6][1]=3;
        this.grid[6][2]=3;
        this.grid[6][3]=3;
        this.grid[6][4]=3;
        this.grid[6][5]=3;
        
        this.totalShips=3;
        this.sunkShips=0;        
    }
    recieveAttack(i,j)
    {  
        if(this.grid[i][j]===-1){
            this.grid[i][j]=-2;
            return 'No Ship';
        }
      
        if(this.grid[i][j]>=1)
        {
            let v=this.grid[i][j];
            this.grid[i][j]=-3;
            this.arr[v].hit();
            if(this.arr[v].isSunk()){this.sunkShips++;
                  return "Ship Sunked"}
            return 'Ship';
        }
        if(this.grid[i][j]===-2)return 'Already Attacked non Ship';
        if(this.grid[i][j]===-3)return 'Already Attacked Ship'

    }
    isLost(){
        return this.sunkShips===this.totalShips;
    }
}
export default gameboard;