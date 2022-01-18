
class Ship {
    constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.attack = this.attack.bind(this);    
    }
    
    attack(opp) {
        alert(`${this.name} has engaged their attack method against ${opp.name}`);
        console.log(`${this.name} has engaged their attack method against ${opp.name}`);
        
        if (this.accuracy > Math.random()){
            alert(`${this.name} has succesfully landed a hit on ${opp.name}`);
            console.log(`${this.name} has succesfully landed a hit on ${opp.name}`);
            opp.hull -= this.firepower;
            
            if(opp.hull <= 0){
                enemyShipArr.pop();
                removeEnemyShip();

                if (enemyShipArr.length !== 0){
                    alert(`An enemyShip has been destroyed. There are ${enemyShipArr.length} enemyShips left. ${this.name} has ${this.hull/ 20 * 100}% health. Attacking or Retreating are now your options.`);
                    console.log(`There are ${enemyShipArr.length} enemyShips left and ${this.name} has ${this.hull/ 20 * 100}% health`);
                    appearRetreatButton();
                    appearAttackButton();
                    disapearRetaliateButton();
                } else {
                    alert (`${this.name} has destroyed all the ships. We live to battle another day. Click refresh on the browser to play again`);
                    console.log(`${this.name} has destroyed all the ships. We live to battle another day. Click refresh on the browser to play again`);
                    disappearAttackButton();
                    disappearRetreatButton();
                }
            } else {
                alert (`${opp.name} is preparing to retaliate`);
                console.log(`${opp.name} is preparing to retaliate`);
                opp.attack(this);
            }
        } else {
    
            alert (`${opp.name} has evaded ${this.name} attack. ${opp.name} now to engage in an attack. If successful thay can deal ${opp.firepower /20 * 100} % damage`);
            console.log(`${opp.name} has evaded ${this.name} attack. ${opp.name} will now engage in an attack.`);
            opp.attack(this);
        }
    }

    retreat() {
        if (confirm("You sure? This will refresh brower window")){
            window.location.reload();
        }
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
            if (opp.hull > 0){
                alert (`${this.name} has landed the counterAttack. ${opp.name} has ${opp.hull/20 * 100}% health`);
                alert (`An attack from ${opp.name} is a must because we survived their attack. ${this.name} has a total of ${this.hull} health points. Do you like your chances?`);
                console.log (`${this.name} has landed the counterAttack ${opp.name} has ${opp.hull/20 * 100}% health`);
                console.log (`An attack from ${opp.name} is a must because we survived their attack. ${this.name} has a total of ${this.hull} points`);
                disappearAttackButton();
                disappearRetreatButton();
                appearRetaliateButton();
            } else {
                removeUssAssembly();
                alert (`${this.name} has landed the counterAttack. And destroyed USS Assembly`);
                if (confirm ("USS was defeated. Would you like to start over?")){
                    window.location.reload();
                }
                console.log (`${this.name} has landed the counterAttack. And destroyed USS Assembly`);
                disapearRetaliateButton();
                disappearAttackButton();
                disappearRetreatButton();
            }
        } else {
            alert (`${this.name} had no success in their attack`);
            alert (`${opp.name} must retaliate. Rules say so. ${this.name} has a total of ${this.hull} health`);
            console.log (`${this.name} had no success in their attack`);
            console.log (`${opp.name} must retaliate. Rules say so`);
            appearRetaliateButton();
            disappearRetreatButton();
            disappearAttackButton();
            }
        }
    }
//functions  
const startBattle = () => {
    ussAssembly.attack(enemyShipArr[enemyShipArr.length -1]);
}
const appearAttackButton = () => {
    attackButton.style.display = "inline";
}

const appearRetreatButton = () => {
    retreatButton.style.display ="inline";
}

const appearRetaliateButton = () => {
    retaliateButton.style.display ="inline";
}

const disapearRetaliateButton = () => {
    retaliateButton.style.display = "none";
}

const disappearAttackButton = () => {
    attackButton.style.display = "none";
}

const disappearRetreatButton = () => {
    retreatButton.style.display ="none";
}

const removeEnemyShip = () => {
    const enemyShip = document.querySelector(".enemies");
    enemyShip.remove();
}

const removeUssAssembly = () => {
    const ussAssembly = document.querySelector("uss-assembly");
    ussAssembly.remove();
}

//"actors"
const ussAssembly = new Ship("USS Assembly", 20, 10, 0.7);
const alphaShip = new EnemyShip("AlphaShip");
const betaShip = new EnemyShip("BetaShip");
const gammaShip = new EnemyShip("GammaShip");
const deltaShip = new EnemyShip("DeltaShip");
const epsilonShip = new EnemyShip("epsilonShip");
const etaShip = new EnemyShip("EtaShip");
const enemyShipArr = [alphaShip, betaShip, gammaShip, deltaShip, epsilonShip, etaShip];

//buttons
const startButton = document.querySelector("#start");
const attackButton = document.querySelector("#attack");
const retaliateButton = document.querySelector("#retaliate");
const retreatButton = document.querySelector("#retreat");
//styles for buttons
attackButton.style.display = "none";
retaliateButton.style.display = "none";
retreatButton.style.display = "none";


startButton.addEventListener("click", () =>{
    startButton.style.display = "none";
    retaliateButton.style.display = "none";
    attackButton.style.display = "inline";
    startBattle();
});

attackButton.addEventListener("click", ()=>{
   startBattle();    
});

retaliateButton.addEventListener("click", () => {
    startBattle();
});

retreatButton.addEventListener("click", () => {
   ussAssembly.retreat();
});

