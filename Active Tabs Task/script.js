function asd( clicked_id ) {
	var proba = document.getElementById( clicked_id );
	var bashta = document.getElementById( "buttonsContainer" );
	var neshto = bashta.getElementsByClassName("btn");
	for ( var i = 0; i < neshto.length; i ++ ) {
		neshto[i].classList.remove("active");
	}
	console.log( neshto );
	proba.classList.add("active");
}