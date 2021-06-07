function tournamentWinner(competitions, results) {
	let finalResults = {}
	let highest = 0
	let winner = ''
	
	//Get all Teams in cache
	for(match of competitions) {
		if(!finalResults[match[0]]) {
			finalResults[match[0]] = 0
		}
		
		if(!finalResults[match[1]]) {
			finalResults[match[1]] = 0
		}
	}
	
	//tally results
	for(let i = 0; i<competitions.length; i++) {
		finalResults[competitions[i][results[i]===0?1:0]]++
	}
	
	//Check which team has most points
	let keys = Object.keys(finalResults);
	for(let i=0; i<keys.length; i++) {
		if(finalResults[keys[i]] > highest) {
			highest = finalResults[keys[i]]
			winner = keys[i]
		}
	}
	
	//Return the winner
  return winner;
}