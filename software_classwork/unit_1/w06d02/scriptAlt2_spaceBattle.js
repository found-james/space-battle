// PLAYER SHIP PROPERTIES

class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    
    // PLAYER ATTACK FIRST ALIEN SHIP METHOD

    attack(opponent) {
    

        if(Math.random() <= this.accuracy) {
            opponent.hull -= this.firepower;
        // check to see if current enemy ship hull is 0, remove that enemy
        // if(opponent.hull <= 0) {
        //    enemyShips.shift()
        //    this.attack(enemyShips[0]) // window.alert do you want to keep attacking or retreat
        // } MOVE TO FIGHT FUNCTION
        } else {
            console.log('You missed!')
        }

    
        
        // console.log(opponent.hull);
    }
    // PLAYER RETREAT METHOD

    retreat() {
        
    }
    
}
// INSTANTIATING PLAYER SHIP

const ussAssembly = new Ship('USS Assembly', 20, 5, .7);
console.log(ussAssembly)

// ENEMY SHIP PROPERTIES

class EnemyShip {
    constructor() {
        this.hull = Math.floor(Math.random()*4) + 3;
        this.firepower = Math.floor(Math.random()*3) + 2;
        this.accuracy = Math.random() * .2 + .6;
    }

    // ENEMY ATTACKS US METHOD

    attack(player) {
    
        if(Math.random() <= this.accuracy) {
            player.hull -= this.firepower;
     
        } else {
            console.log('Alien ship missed their shot!')
        }
        
        // console.log(opponent.hull);
    }
}

// INSTANTIATION OF ENEMY SHIPS 1-6

const enemyShipOne = new EnemyShip
const enemyShipTwo = new EnemyShip
const enemyShipThree = new EnemyShip
const enemyShipFour = new EnemyShip
const enemyShipFive = new EnemyShip
const enemyShipSix = new EnemyShip

// ARRAY OF ENEMY SHIPS

const enemyShips = [enemyShipOne, enemyShipTwo, enemyShipThree, enemyShipFour, enemyShipFive,
enemyShipSix];

console.log(enemyShips)

// FIGHT FUNCTION

const fight = () => {
    if(ussAssembly.hull > 0) { // if our ship is still alive
        console.log("You fired at the enemy ship.")
        ussAssembly.attack(enemyShips[enemyShips.length - 1]) // attack the first-in-line enemy ship
        console.log("Enemy ship hull is at " + enemyShips[enemyShips.length - 1].hull + ".")
        
        if(enemyShips[enemyShips.length - 1].hull > 0) { // if first enemy is still alive
            console.log("The alien ship attacks us!")
            enemyShips[enemyShips.length - 1].attack(ussAssembly) // enemy attacks our ship
            console.log("Our ship hull is at " + ussAssembly.hull + ".")

        } else {
            console.log(`There are ${enemyShips.length - 1} remaining.`) 
            enemyShips.pop() // if the first enemy is destroyed, remove it from the array
            // if ()
        } 
    } else {
        console.log("you are dead")
        // add a code to close out the game with endGame() function
    }
    

}


// for(let i = 1; i < 7; i++) {
//     const enemyShip = new Ship(`enemyShip ${i}`
// }
// console.log(enemyShips);



const attackButton = document.getElementById("attack")

attackButton.addEventListener('click', () => {
    if (enemyShips.length > 0){
    fight() /* purpose of fight method is to have us attack the alien ship, 
    if we survive, it hits us. if alien ship is still alive, we keep attacking 
    it by calling fight(). it is a single round of combat. */
    } else {
        console.log("you killed them all");
    }
})