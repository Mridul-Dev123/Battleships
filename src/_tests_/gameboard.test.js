
import gameboard from "../gameboard";

test("Hitting non Ship",()=>{
    const d=new gameboard;
    expect(d.recieveAttack(1,1)).toBe('No Ship')
})
test("Hitting a ship",()=>
{
    const d=new gameboard;
    expect(d.recieveAttack(0,0)).toBe('Ship')
})
test("Sinking a Ship",()=>{
     const d=new gameboard;
     d.recieveAttack(0,1)
     d.recieveAttack(0,2)
    expect(d.recieveAttack(0,0)).toBe('Ship Sunked')
})
test("Attacking already attacked ship area",()=>{
     const d=new gameboard;
     d.recieveAttack(0,1)
     d.recieveAttack(0,2)
    expect(d.recieveAttack(0,1)).toBe('Already Attacked Ship')

})
test("Attacking already attacked nonship area",()=>{
     const d=new gameboard;
     
     d.recieveAttack(2,2)
    expect(d.recieveAttack(2,2)).toBe('Already Attacked non Ship')

})

test("Not Loosing",()=>{
    const d=new gameboard;
     d.recieveAttack(0,1)
     d.recieveAttack(0,2)
     d.recieveAttack(0,0)
     d.recieveAttack(5,2)
     d.recieveAttack(8,2)
     d.recieveAttack(0,7)
     
    expect(d.isLost()).toBe(false);
})

test("Loosing",()=>{
    const d=new gameboard;
     d.recieveAttack(0,1)
     d.recieveAttack(0,2)
     d.recieveAttack(0,0)
     d.recieveAttack(0,7)
     d.recieveAttack(1,7)
     d.recieveAttack(2,7)
     d.recieveAttack(3,7)
    expect(d.isLost()).toBe(true)
})

