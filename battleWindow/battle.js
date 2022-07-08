let hero = {
	name:"Elroy",
	intelligence: "10",
	defense:"10",
	speed:"30",
	pv:"100",
	mana:"100",
	mastery:{fire:"5", water:"5", wind:"5", earth:"5"},
	fire:["fireBolt"],
	water:["waterBolt"],
	wind:["windBolt"],
	earth:["earthBolt"]
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
	name: "Earthlite",
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
	elemWeak:[""]
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
//---------- utility function ----------

//---------- gen var for getOpponent ----------
//let bossSumon = sessionStorage.getItem("pos"); // we get the position of the character box from mapgame.html
//---------- gen var for getOpponent ----------

function getOpponent(){ 

	bossSumon = 225;
	if(bossSumon >= 224){ // if pos == 225 then the player enter the fight from one of the doors and not from the boss talk

		switch(randomize(0, 3)){ //choose a random monster from the monster array

			case 0:
			return monster[0];

			case 1:
			return monster[1];

			case 2:
			return monster[2];

			case 3:
			return monster[3];

		}
	}
	return baakTik;
}

function playerTurn(){

	console.log(first.name, first.pv, second.name, second.pv);

	let random = randomize(0.85, 1.35); 

	let damage = (hero.mastery.fire / opponent.defense) * hero.intelligence * random;
	damage = Math.floor(damage);
	console.log(`${hero.name} hit ${damage}`);
	opponent.pv -= damage;
}


function opponentTurn(){

	console.log(first.name, first.pv, second.name, second.pv);

	let random = randomize(0.85, 1.35);

	let damage = (opponent.baseDamage / hero.defense) * random;
	damage = Math.floor(damage); 
	console.log(`${opponent.name} hit ${damage}`);
	hero.pv -= damage;
}

function endGame(){
	if (hero.pv <= 0){
		alert("GAME OVER !!!");
		return;

	}else if(opponent != baakTik){
		alert( "Zivar: Well done !!! my apprentice !!")
		hero.intelligence ++;
		return;
	}
	else{
		alert("Zivar: ... You defeated Baak-Tik !!!! You are now officially a rank 2 apprentice, we will soon start your IF's magic training !!!");
		return;
	}
}
function fight(){

	while(hero.pv > 0 && opponent.pv > 0){

		if(first == opponent){
			opponentTurn();
			if(checkDead()){ // each turn checkDead will check if the last attack killed someone and break out of the loop is it did
				break;
			}
			playerTurn();
			if(checkDead()){
				break;
			}
		}
		else{
			playerTurn();
			if(checkDead()){
				break;
			}
			opponentTurn();
			if(checkDead()){
				break;
			}
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

	chooseTurn();
	if (aiTurn) {
		alert(`Zivar: ${opponent.name} is faster then you be ready to get hit`);
		first = opponent;
		second = hero; 
	}else{
		alert(`Zivar: You took ${opponent.name} by surprise !! quick choose a spell!!`);
		first = hero;
		second = opponent;
	}
	fight();
}
alert("an enemy appears !!!");

combatHandler();