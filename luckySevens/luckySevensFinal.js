function playGame() {
	var firstBet = document.getElementById("startingBet").value;
	var dice1 = 0
	var dice2 = 0
	var rollDice = 0
	var rollCount = 0
	var maxAmount = 0
	var maxAmountRoll = 0
	var maxPosition = 0
	var bet = firstBet
	var betArrays = [firstBet]
	var win = 4
	var loss = 1
	
	if(firstBet <= 0 || isNaN(firstBet)) {
		alert("Starting bet must be a number greater than 0.");
		document.getElementById("startingBet").className = "form-inline has error";
		document.getElementById("startingBet").focus();
			
	}
	
	
	while(bet > 0) {
		dice1 = Math.floor(Math.random() * 6) + 1;
		dice2 = Math.floor(Math.random() * 6) + 1;
		rollDice = dice1 + dice2;
		if(rollDice != 7) {
			bet -= loss
		} else {
			bet += win
		}
		betArrays.push(bet)
	}
	
	function showResults() {
		rollCount = betArrays.length
		maxAmount = Math.max(...betArrays)
		maxPosition = betArrays.indexOf(maxAmount)
		maxAmountRoll = maxPosition 
		if(maxPosition < 0) {
			maxAmountRoll = 0
			}
		
		document.getElementById("results").style.display = "block";
		document.getElementById("playButton").innerText = "Play Again";
		document.getElementById("startBet").innerText = "$" + firstBet + ".00";
		document.getElementById("totalRolls").innerText = rollCount;
		document.getElementById("highestAmount").innerText = "$" + maxAmount + ".00";
		document.getElementById("highestAmountRoll").innerText = maxAmountRoll;
		
	}
	showResults()
	
}
	
	
		
		
