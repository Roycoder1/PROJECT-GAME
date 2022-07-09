


document.addEventListener('keydown', function(event){
	console.log (event.key,event.keyCode)


	if (event.keyCode==13 || event.keyCode ==32) {

		document.location.href='mapgame.html';

	}


})