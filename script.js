//keep track of the user's XP, health
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//references to the html elements
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
  {
    name:"stick",
    power:5
  },
  {
    name:"dagger",
    power:5
  },
  {
    name:"hammer",
    power:5
  },
  {
    name:"sword",
    power:100
  }
]
const locations = [
  {
    name:"town square",
    "button text":["Go to store","Go to cave","fight dragon"],
    "button functions":[goStore , goCave, fightDragon],
    text:"You are in the town square, you can go to the \"store\" or the \"cave\"."
  },
  {
    name:"store",
    "button text":["Buy 10 health (10) gold", "Buy weapon (30) gold","Go to time square"],
    "button functions":[buyHealth , buyWeapon, goTown],
    text:"You enter the store."
  },
  {
    name:"cave",
    "button text":["Fight slime", "Fight fanged beast","Go to time square"],
    "button functions":[fightSlime , fightBeast, goTown],
    text:"You enter the cave, there are some monsters in there!" 
  },
]

//Initialization of buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text
}

function goTown(){
  update(locations[0]);
}

function goStore(){
  update(locations[1]);
}
function goCave(){
  update(locations[2]);
}
function fightDragon(){
  
}

function buyHealth(){

  if(gold>=10){
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  }else{
    text.innerText = "You need more gold to buy health";
  }
}

function buyWeapon(){
  if(currentWeapon < weapons.length - 1{
    if(gold>=30){
      gold -= 30;
      currentWeapon++; //we are going to move up by one every time in the weapon list
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You have the new weapon: "+newWeapon+".";
      inventory.push(newWeapon); //add the weapon in the inventory
      text.innerText = "In your inventory you have: "+inventory+".";
    }else{
      text.innerText = "You need more gold to buy weapon";
    }
  }else{
    text.innerText = "You have all the weapons available";
    button2.innerText = "Sell weapon for 15 golds";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon(){
  if(inventory.length > 1){ //if there is anything to sell
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift(); //remove first elem of inventory and puts it in the variable
    text.innerText = "You sold a "+ currentWeapon +".";
  }else {
    text.innerText = "You should not sell your only weapon.";
  }
}

function fightSlime(){
  
}
function fightBeast(){
  
}

