class Ship {
    constructor(name, hull, firepower, accuracy) {
      this.name = name
      this.hull = hull
      this.firepower = firepower
      this.accuracy = accuracy
    }
    fire(enemy) {
      if(this.accuracy >= randomNum(0, 1)){
        enemy.hull -= this.firepower
        if(enemy.hull <= 0){
          alert("Direct hit! Enemy ship has been destroyed!")
        } else {
          alert("Direct hit! The enemy has a hull strength of " + enemy.hull + " left!")
        }
      } else {
        alert("The lasers missed! Fire again!")
      }
    }
    retreat() {
      alert("You have abandoned the fleet! The starbase will surely be overrun now! You will rot in prison for this treason!")
    }
  }
  
  
  // create enemyShip class
  
  class EnemyShip {
    constructor(hull, firepower, accuracy) {
      this.hull = hull
      this.firepower = firepower
      this.accuracy = accuracy
    }
    fire(opponent) {
      if(this.accuracy >= randomNum(0, 1)) {
        opponent.hull -= this.firepower
        if(opponent.hull <= 0) {
          alert('We have sustained critical damage!')
        } else {
          alert("We've been hit! Our hull strength is down to " + opponent.hull + "!")
        }
      } else {
        alert("Enemy fired but missed, keep fighting!")
      }
    }
  }
  
  
  const randomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    randomInteger = Math.floor(Math.random() * (max - min + 1)) + min
    return randomInteger
  }
  
  const randomNum = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min
    return randomNumber
  }
  
  
  let myShip = new Ship("USS Schwarzenegger", 20, 5, .7)
  
  let enemyShips = []
  
  const createEnemies = () => {
    for(let i = 0; i < 6; i++){
      let hull = randomInt(3, 6)
      let firepower = randomInt(2, 4)
      let accuracy = randomNum(.6, .8)
      console.log(hull, firepower, accuracy);
      let enemy = new EnemyShip(hull, firepower, accuracy)
      console.log(enemy);
      enemyShips.push(enemy)
    }
    console.log(enemyShips);
  }
  
  let currentEnemy = {}
  
  
  const startGame = () => {
    createEnemies()
    alert("Welcome aboard sir! The starbase is under attack but a fleet of six enemy ships. We will be approaching them shortly!")
    currentEnemy = enemyShips.shift()
    console.log(currentEnemy);
    console.log(enemyShips);
    promptBattle()
  }
  
  
  
  const promptBattle = () => {
    alert("Our hull strength is currently at " + myShip.hull + ". An enemy is approaching! They have a hull strength of " + currentEnemy.hull + ", a firepower of " + currentEnemy.firepower + ", and a laser accuracy of " + currentEnemy.accuracy + "!")
    let playerChoice = prompt("Should we engage?", "(e)ngage || (r)etreat")
    if(playerChoice === "r") {
      myShip.retreat()
    } else if (playerChoice === "e") {
      battleSequence()
    } else {
      alert("I didn't understand that sir? What should we do?")
      promptBattle()
    }
  }
  
  const battleSequence = () => {
    myShip.fire(currentEnemy)
    if(currentEnemy.hull <= 0 && enemyShips.length > 0) {
      currentEnemy = enemyShips.shift()
      promptBattle()
    } else if (currentEnemy.hull > 0) {
      currentEnemy.fire(myShip)
      if(myShip.hull > 0){
        promptBattle()
      } else {
        lose()
      }
    } else {
      win()
    }
  }
  
  const lose = () => {
    alert("Our ship has sustained critical damage, we must retreat and hope for  the best.")
    enemyShips = []
    startGame()
  }
  
  const win = () => {
    alert("We have destroyed the enemy fleet! We will live to fight another day!")
    startGame()
  }
  
  
  startGame()