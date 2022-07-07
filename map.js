let inter;
// let posBottom = 1;
let character = document.querySelectorAll('div')[2]
let posLeftRight = 0;
// let posLeft = 1;
let posTopBotom = 0;
let pos;









document.addEventListener('keydown', function(event){

	// console.log(event.key,event.keyCode)

	if (event.keyCode == 83) {
		let pos = 1;
		character.style.top = posTopBotom  +'px';
		posTopBotom=posTopBotom+(7*pos);
	}
	if(event.keyCode == 87){
		let pos = -1;
		character.style.top = posTopBotom  +'px';
		posTopBotom=posTopBotom+(7*pos);
	}
	if (event.keyCode==68) {

		let pos = 1;
		character.style.left = posLeftRight + 'px';
		posLeftRight= posLeftRight+7;
	}
	if(event.keyCode==65){
		let pos = -1;
		character.style.left = posLeftRight + 'px';
		posLeftRight= posLeftRight+ (7*pos);


	}

	if (posLeftRight>= 398 && posLeftRight<=399  && posTopBotom >=0  && posTopBotom<=98) {
		

		console.log(posTopBotom, posLeftRight)

		alert('Whats happening?')
		return;
	}




}
)



document.addEventListener('keyup', function(event){

	console.log(event.key,event.keyCode)
	clearInterval(inter)


})




if (posLeftRight>= 398 && posLeftRight<=498  && posTopBotom >=0  && posTopBotom<=98) {


	console.log(posTopBotom, posLeftRight)

	alert('Whats happening?')



}






