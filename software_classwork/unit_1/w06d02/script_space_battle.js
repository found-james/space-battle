class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(opp) {
        if (this.accuracy > Math.random()){
        opp.hull -= this.firepower;
        } else {
            console.log("you missed");
        }
    }
    retreat() {
        //press button to retreat
        //restart game
    }
}

class EnemyShip {
    constructor(name){
        this.name = name;
        this.hull = Math.floor(Math.random()*4) + 3;
        this.firepower = Math.floor(Math.random()*3) + 2;
        this.accuracy = Math.random() * .2 + .6;
    }

    attack(opp){
        if (this.accuracy > Math.random()){
            opp.hull -= this.firepower;
        } else {
            //print msg you missed
            //prompt player to attack or retreat
        }

    }
}

const ussAssembly = new Ship("USS Assembly", 20, 5, 0.7);
const EnemyShipArr = [new EnemyShip("alpha"), new EnemyShip("beta"), new EnemyShip("gamma"), new EnemyShip("delta"), new EnemyShip("eta"), new EnemyShip("zeta")];

