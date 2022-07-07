function move(){

	let character = document.querySelector('div')
	console.log(character)

	let pos = 0;
	let id = character.addEventListener('keypress' ,s)

}
function s (){



	{
		if (pos ==1440){
			clearInterval(id)
		}
		else {
			pos++
			box.style.right = pos+'px';

		}
	}

}



