let hero = {
	name:"Elroy",
	intelligence: "10",
	defence:"10",
	speed:"30",
	pv:"100",
	mana:"100",
	mastery:{fire:"5", water:"5", wind:"5", earth:"5"},
	fire:["fireBolt"],
	water:["waterBolt"],
	wind:["windBolt"],
	earth:["earthBolt"]
};

let ignit = {
	pv:"100",
	speed:"20",
	defence:"20",
	baseDamage:"25",
	elemResist:["fire"],
	elemWeak:["water"]
};

let aqualit = {
	pv:"100",
	speed:"20",
	defence:"25",
	baseDamage:"15",
	elemResist:["fire"],
	elemWeak:["water"]
};

let windit = {
	pv:"100",
	speed:"40",
	defence:"10",
	baseDamage:"20",
	elemResist:["fire"],
	elemWeak:["water"]
};

let earthlit = {
	pv:"100",
	speed:"10",
	defence:"40",
	baseDamage:"20",
	elemResist:["fire"],
	elemWeak:["water"]
};

let baakTik = {
	pv:"200",
	speed:"50",
	defence:"25",
	baseDamage:"130",
	elemResist:["fire", "water", "wind", "earth"],
	elemWeak:[""]
};

let opponent;
let aiTurn = false;
let first;
let second;

function getOpponent(bossSumon){
	if(bossSumon == "boss"){
		return baakTik;
	}
}

function combatStart(){
	opponent = getOpponent("boss");
	console.log(opponent);
	chooseTurn();
	if (aiTurn) {
		alert("Zivar: opponent_name is faster then you be ready to get hit");
		first = opponent;
		second = hero; 
	}else{
		alert("Zivar: You took opponent_name by surprise !! quick choose a spell!!");
		first = hero;
		second = opponent;
	}
	fight();
}

function fight(){
	while(hero.pv > 0 || opponent > 0){
		console.log(first.pv, second.pv)
		attack(first);
	}
}

function chooseTurn(){
	if(opponent.speed > hero.speed){
		aiTurn = true;
	}
}

function attack (){
	console.log(hero.name, hero.pv);
	let random = (Math.random() * (1 - 0.85) + 0.85).toFixed(2)
	if(first == opponent){
		let damage = (opponent.baseDamage / hero.defence) * random;
		damage = Math.floor(damage); 
		console.log(damage);
		hero.pv -= damage;
		console.log(hero.pv);
	}
}

alert("an enemy appears !!!");
combatStart();