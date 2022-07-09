let hero = {
	name:"Elroy",
	baseDamage:"10",
	intelligence: "10",
	defense:"10",
	speed:"30",
	pv:"100",
	mana:"100",
	fireMagic:{spells:[{name:"Fire Bolt", manaCost:"10", type:"fire"}], mastery:"5"}, 
	waterMagic:{spells:[{name:"Water Bolt", manaCost:"10", type:"water"}], mastery:"5"},
	windMagic:{spells:[{name:"Wind Bolt", manaCost:"10", type:"wind"}], mastery:"5"},
	earthMagic:{spells:[{name:"Earth Bolt", manaCost:"10", type:"earth"}], mastery:"5"}
};

let monster = [
{
	name:"Ignit",
	pv:"100",
	speed:"30",
	defense:"20",
	baseDamage:"25",
	elemResist:["fire"],
	elemWeak:["water"]
},
{
	name:"Aqualit",
	pv:"100",
	speed:"20",
	defense:"25",
	baseDamage:"15",
	elemResist:["fire"],
	elemWeak:["water"]
},

{
	name:"Windit",
	pv:"100",
	speed:"40",
	defense:"10",
	baseDamage:"20",
	elemResist:["fire"],
	elemWeak:["water"]
},

{
	name: "Earthlit",
	pv:"100",
	speed:"10",
	defense:"40",
	baseDamage:"20",
	elemResist:["fire"],
	elemWeak:["water"]
}
]

let baakTik = {
	name:"Baak-Tik",
	pv:"200",
	speed:"50",
	defense:"25",
	baseDamage:"130",
	elemResist:["fire", "water", "wind", "earth"],
	elemWeak:[" "]
};


//---------- utility function ----------  (small functions to make my life easier :P)
function randomize(min, max){

	let random;

	if(min == 0){
		random = Math.floor(Math.random() * (max + 1));
		return random;
	}
	random = (Math.random() * (max - min) + min).toFixed(2)
	return random;
}

//---------- gen var for chooseTurn ----------
let aiTurn = false;
//---------- gen var for chooseTurn ----------
function chooseTurn(){

	if(opponent.speed == hero.speed || opponent.speed > hero.speed){
		aiTurn = true;
	}
}

function checkDead(){

	if(opponent.pv <= 0 || hero.pv <= 0){
		return true;
	}
	return false;
}

function isResistant(){

	if( spellSelected.type in opponent.elemResist){
		return 2;
	}
	return 1;
}
function isWeak(){

	if(opponent == baakTik){
		return 1;

	}else if(spellSelected.type in opponent.elemResist){
		return 2;
	}
	return 1;
}
//---------- utility function ----------

//---------- gen var for getOpponent ----------
let bossSumon = sessionStorage.getItem("pos"); // we get the position of the character box from mapgame.html
let vilainImg;
//---------- gen var for getOpponent ----------
function getOpponent(){ 

	let random = randomize(0,3); //random num for switch condition down 
	
	if(bossSumon >= 224){ // if pos >= 224 then the player enter the fight from one of the doors and not from the boss talk

		switch(random){ //choose a random monster from the monster array

			case 0:
			vilainImg =  document.querySelector("#vilainSide .char");
			vilainImg.setAttribute("src", "images/Ignit.png");
			return monster[0];

			case 1:
			vilainImg =  document.querySelector("#vilainSide .char");
			vilainImg.setAttribute("src", "images/Aqualit.png");
			return monster[1];

			case 2:
			vilainImg =  document.querySelector("#vilainSide .char");
			vilainImg.setAttribute("src", "images/Windlit.png");
			return monster[2];

			case 3:
			vilainImg =  document.querySelector("#vilainSide .char");
			vilainImg.setAttribute("src", "images/Earthlit.png");
			return monster[3];

		}
	}
	return baakTik;
}
// -----------gen var fo playerturn ----------
let newDiv;
let spellSelected = null;
let masteryModif; 

let fireSpell = document.querySelectorAll(".element")[0];
newDiv = document.createElement("div")
let fireSpellName = document.createTextNode(hero.fireMagic.spells[0].name);
newDiv.appendChild(fireSpellName);
newDiv.classList.add("fireSpell");
fireSpell.appendChild(newDiv);
fireSpell.addEventListener("click", function(){
	spellSelected = hero.fireMagic.spells[0];
	masteryModif = hero.fireMagic.mastery;
	console.log(spellSelected.name);
}); 

let waterSpell = document.querySelectorAll(".element")[1];
newDiv = document.createElement("div")
let waterSpellName = document.createTextNode(hero.waterMagic.spells[0].name);
newDiv.appendChild(waterSpellName);
newDiv.classList.add("waterSpell");
waterSpell.appendChild(newDiv);
waterSpell.addEventListener("click", function(){
	spellSelected = hero.waterMagic.spells[0];
	masteryModif = hero.waterMagic.mastery;
	console.log(spellSelected.name);
});  

let windSpell = document.querySelectorAll(".element")[2];
newDiv = document.createElement("div")
let windSpellName = document.createTextNode(hero.windMagic.spells[0].name);
newDiv.appendChild(windSpellName);
newDiv.classList.add("windSpell");
windSpell.appendChild(newDiv); 
windSpell.addEventListener("click", function(){
	spellSelected = hero.windMagic.spells[0];
	masteryModif = hero.windMagic.mastery;
	console.log(spellSelected.name);
}); 

let earthSpell = document.querySelectorAll(".element")[3];
newDiv = document.createElement("div")
let earthSpellName = document.createTextNode(hero.earthMagic.spells[0].name);
newDiv.appendChild(earthSpellName);
newDiv.classList.add("earthSpell");
earthSpell.appendChild(newDiv);
earthSpell.addEventListener("click", function(){
	spellSelected = hero.earthMagic.spells[0];
	masteryModif = hero.earthMagic.mastery;
	console.log(spellSelected.name);
});  
// -----------gen var fo playerturn ----------
function playerTurn(){

	let weak; 
	let resist; 

	console.log(first.name, first.pv, second.name, second.pv);
	// while(spellSelected == null){
	// 	setTimeout(function(){
	// 		alert("I told you to choose a spell !!!");
	// 	}, 10000);
	// }
	weak = isWeak();
	resist= isResistant();
	let random = randomize(0.85, 1.35);

	let damage = (hero.baseDamage * masteryModif / opponent.defense * resist) * hero.intelligence * weak * random;
	damage = Math.floor(damage);
	console.log(`${opponent.name} take ${damage}`);
	opponent.pv -= damage;
}

function opponentTurn(){

	console.log(first.name, first.pv, second.name, second.pv);

	let random = randomize(1.85, 3.35);

	let damage = (opponent.baseDamage / hero.defense) * random;
	damage = Math.floor(damage); 
	console.log(`${hero.name} take ${damage}`);
	hero.pv -= damage;
}

function endGame(){

	if (hero.pv <= 0){
		console.log("GAME OVER !!!");
		return;

	}else if(opponent != baakTik){

		alert("Master Zivar: Well done !!! my apprentice !!")

		hero.intelligence ++;
		return;
	}
	else{

		alert("Master Zivar: ... You defeated Baak-Tik !!!! You are now officially a rank 2 apprentice, we will soon start your IF's magic training !!!");

		return;
	}
}
function fight(){

	while(hero.pv > 0 || opponent.pv > 0){
		
		if(first == opponent){
			opponentTurn();
			if(checkDead()){break;}

			playerTurn();
			if(checkDead()){break;}
			
		}else{
			playerTurn()
			if(checkDead()){break;}

			opponentTurn();
			if(checkDead()){break;}
		}
	}
	endGame();
}

//---------- gen var for combatHandler ----------
let opponent;
let first;
let second;
//---------- gen var for combatHandler ----------
function combatHandler(){

	opponent = getOpponent();
	alert("an enemy appears !!!");

	chooseTurn();
	if (aiTurn) {
		alert(`Master Zivar: ${opponent.name} is faster then you be ready to get hit`);
		first = opponent;
		second = hero; 
	}else{
		alert(`Master Zivar: You took ${opponent.name} by surprise !! quick choose a spell!!`);
		first = hero;
		second = opponent;
	}
	fight();
}
combatHandler();