let inter;
// let posBottom = 1;
let character = document.querySelectorAll('div')[1]
// console.log(character)

let posLeftRight = 0;
// let posLeft = 1;
let posTopBotom = 0;
let pos;

let container1 = document.querySelector('.text')
let perso = document.querySelector('.character img')
// console.log(perso.setAttribute('src','elroyLastdown.png'))

let getData = sessionStorage.getItem('pos')//get the position from the battle



document.addEventListener('keydown', function(event){

	// console.log(event.key,event.keyCode)

// move bottom

if (event.keyCode == 83) {
	let pos = 1;
	character.style.top = posTopBotom  +'px';
	posTopBotom=posTopBotom+(7*pos);
	perso.setAttribute('src', 'images/elroyLastdown.png')
}
	if(event.keyCode == 87){//move top
		let pos = -1;
		character.style.top = posTopBotom  +'px';
		posTopBotom=posTopBotom+(7*pos);
		perso.setAttribute('src','images/elroylastup.png')

	}
	if (event.keyCode==68) {//move right

		let pos = 1;
		character.style.left = posLeftRight + 'px';
		posLeftRight= posLeftRight+7;
		
		perso.setAttribute('src','images/elroyLastright.png')
	}
	if(event.keyCode==65){//move left
		let pos = -1;
		character.style.left = posLeftRight + 'px';
		posLeftRight= posLeftRight+ (7*pos);
		perso.setAttribute('src','images/elroylastleft.png')


	}

	if (posLeftRight>= 406 && posLeftRight<=441  && posTopBotom >=224  && posTopBotom<=225) {
		//battle zone house 1

		console.log(posTopBotom, posLeftRight)

		alert('Whats happening?')

		document.location.href='battleWindow/battle.html';
		sessionStorage.setItem("pos", posTopBotom);

		return;
	}

	if (posLeftRight>= 749 && posLeftRight<=791  && posTopBotom >=224  && posTopBotom<=225) {
		//battle house 2

		console.log(posTopBotom, posLeftRight)

		alert('Whats happening?')
		sessionStorage.setItem("pos", posTopBotom);
		document.location.href='battleWindow/battle.html'
		return;


	}
	if (posLeftRight>= 952 && posLeftRight<=955  && posTopBotom >=154  && posTopBotom<=182) {
		
		// interaction

		alert("Hey what's up? If you're looking for backtick he is behind the tree, be careful he is angry");
		confirm('Are you strong enough to fight him?')

		return;

	}
	if (posLeftRight>= 1071 && posLeftRight<=1072  && posTopBotom >=14  && posTopBotom<=36) {

		//boss location
		

		alert('Angry backtick appears ')
		sessionStorage.setItem("pos", posTopBotom);
		document.location.href='battleWindow/battle.html'
		return;


	}
	let collision = setInterval(function(){

		//stop movement
		
		if(posLeftRight==91 && posLeftRight<=160 && posTopBotom>=0 && posTopBotom<=427){
			
			console.log( posLeftRight= 0)
		}

	})
},7)








document.addEventListener('keyup', function(event){

	console.log(event.key,event.keyCode)
	clearInterval(inter)


})






// if (posLeftRight>= 1155 && posLeftRight<=1156  && posTopBotom >=335  && posTopBotom<=336) {


// 	console.log(posTopBotom, posLeftRight)

// 	alert('Whats happening?')



// }





