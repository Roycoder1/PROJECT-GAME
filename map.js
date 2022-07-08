let inter;
// let posBottom = 1;
let character = document.querySelectorAll('div')[1]
console.log(character)
let posLeftRight = 0;
// let posLeft = 1;
let posTopBotom = 0;
let pos;
let container1 = document.querySelector('.text')
let perso = document.querySelector('.character img')
console.log(perso.setAttribute('src','elroyup.png'))

let getData = sessionStorage.getItem('pos')



document.addEventListener('keydown', function(event){

	// console.log(event.key,event.keyCode)

	if (event.keyCode == 83) {
		let pos = 1;
		character.style.top = posTopBotom  +'px';
		posTopBotom=posTopBotom+(7*pos);
		perso.setAttribute('src', 'elroy.png')
	}
	if(event.keyCode == 87){
		let pos = -1;
		character.style.top = posTopBotom  +'px';
		posTopBotom=posTopBotom+(7*pos);
		perso.setAttribute('src','elroyup.png')

	}
	if (event.keyCode==68) {

		let pos = 1;
		character.style.left = posLeftRight + 'px';
		posLeftRight= posLeftRight+7;
		
		perso.setAttribute('src','elroy.png')
	}
	if(event.keyCode==65){
		let pos = -1;
		character.style.left = posLeftRight + 'px';
		posLeftRight= posLeftRight+ (7*pos);
		perso.setAttribute('src','elroyleft.png')


	}

	if (posLeftRight>= 406 && posLeftRight<=441  && posTopBotom >=224  && posTopBotom<=225) {
		

		console.log(posTopBotom, posLeftRight)

		alert('Whats happening?')
		document.location.href='battleWindow/battle.html';
		sessionStorage.setItem("pos", posTopBotom);

		return;
	}

	if (posLeftRight>= 749 && posLeftRight<=791  && posTopBotom >=224  && posTopBotom<=225) {


		console.log(posTopBotom, posLeftRight)

		alert('Whats happening?')
		sessionStorage.setItem("pos", posTopBotom);
		document.location.href='battleWindow/battle.html'
		return;


	}
	if (posLeftRight>= 952 && posLeftRight<=955  && posTopBotom >=154  && posTopBotom<=182) {
		
		alert("Hey what's up? If you're looking for backtick he is behind the tree, be careful he is angry");
		confirm('Are you strong enough to fight him?')
		return;





		// let container1 = document.querySelector('.text')

		// let textlines =[
		// {string : "Hey what's up ?", speed : 20},
		// {string : 'Bactick is just bewind be careful he is angry', speed : 20},
		// ];
		// let texts = []
		// textlines.forEach(line=>{
		// 	line.string.split('').forEach(texts=>{
		// 		let span = document.createElement('span');
		// 		span.textContent = texts;
		// 		container1.appendChild(span)
	}
	if (posLeftRight>= 1071 && posLeftRight<=1072  && posTopBotom >=35  && posTopBotom<=56) {


		

		alert('Angry backtick appears ')
		sessionStorage.setItem("pos", posTopBotom);
		document.location.href='battleWindow/battle.html'
		return;


	}
})








document.addEventListener('keyup', function(event){

	console.log(event.key,event.keyCode)
	clearInterval(inter)


})






// if (posLeftRight>= 1155 && posLeftRight<=1156  && posTopBotom >=335  && posTopBotom<=336) {


// 	console.log(posTopBotom, posLeftRight)

// 	alert('Whats happening?')



// }





