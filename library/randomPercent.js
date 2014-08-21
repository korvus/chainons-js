function hasard(from,until){
	var from = undefined == from ? 10 : from;
	var until = undefined == until ? 35 : until;
	multiplicateur = until - from;
	result = Math.round(Math.random()*multiplicateur)+from;
	return result;
}

/**/