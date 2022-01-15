class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(opponent) {
        if (this.accuracy > Math.random()){
        opponent.hull -= this.firepower;
        } else {
            console.log("you missed");
        }
    }
    retreat() {
        
    }
}

const enemyShips = [];

for(let i = 1; i < 7; i++) {
    const enemyShip = new Ship(`enemyShip ${i}`, Math.floor(Math.random()*4) + 3, Math.floor(Math.random()*3) + 2, Math.random() * .2 + .6)
    enemyShips.push(enemyShip);
}

const ussAssembly = new Ship("USS Assembly", 20, 5, 0.7);

// console.log("This is the firepower: ", ussAssembly.firepower);
// console.log(enemyShips[0]);

// ussAssembly.attack(enemyShips[0]);
// // enemyShips[0].attack(ussAssembly);

// console.log(enemyShips[0]);
console.log(enemyShips);

