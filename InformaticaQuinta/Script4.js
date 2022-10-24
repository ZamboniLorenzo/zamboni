var turno = 0;
function controllo(elemento){
	
}

function press(elemento){
	var idCella = elemento.id;
	var cella = document.getElementById(idCella);
	if(!isClickable(cella)){
		return;
	}
	if(cella.style.backgroundColor === "red" || cella.style.backgroundColor === "yellow"){
		return;
	}else{
		if(turno % 2 == 0){
			cella.style.backgroundColor = "red";
		}else{
			cella.style.backgroundColor = "yellow";
		}
		turno++;
	}
}

function isClickable(cella){
	var x = parseInt(cella.id);
	if(x > 60){
		return true;
	}
	x += 10;
	var cellBelow = document.getElementById(x);
	return cellaBelow.style.backgroundColor === "red" || cellaBelow.style.backgroundColor === "yellow";
}