
import createShip from "../ship";


test("Creating a ship",()=>
{   const g=createShip(3);
    g.hit();
    g.hit();
    expect(g.isSunk()).toBe(false);
})
test("Sinking a ship",()=>
{   const g=createShip(3);
    g.hit();
    g.hit();
    g.hit();
    expect(g.isSunk()).toBe(true)
    

})