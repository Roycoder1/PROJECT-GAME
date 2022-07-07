let inter;
let pos = 0;
let character = document.querySelector('div')
console.log(character)
document.addEventListener('keydown', function(event){

	console.log(event.key,event.keyCode)

	

	// inter = setInterval(()=>{
		character.style.top = pos + 'px';
		pos= pos+10;
	// },5)
})


document.addEventListener('keyup', function(event){

	console.log(event.key,event.keyCode)
	clearInterval(inter)


})







