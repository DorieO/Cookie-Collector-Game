$(document).ready(function() {

	var yourMatchingNumber = 0;

	//create a random number
	var randomNum = randomNumGen();

	var wins = 0;
	var losses = 0;
	var desserts;

	function randomNumDesserts() {
		// desserts obj
		return {
			'purple' : {
				points: Math.floor(Math.random() * 11) + 1,
				imageUrl: "assets/css/images/purple.jpeg"
			},
			'white' : {
				points: Math.floor(Math.random() * 11) + 1,
				imageUrl: "assets/css/images/white.jpg"
			},
			'pink' : {
				points: Math.floor(Math.random() * 11) + 1,
				imageUrl: "assets/css/images/pink.jpeg"
			},
			'blue' : {
				points: Math.floor(Math.random() * 11) + 1,
				imageUrl: "assets/css/images/blue.jpeg" 
			}
		};
	}

	function randomNumGen(){
		return Math.floor(Math.random() * 100) + 18;
	}

	function setGame() {
		yourMatchingNumber = 0;
		//create random dessert numbers
		desserts = randomNumDesserts();
		//create a random number and render it
		randomNum = randomNumGen();
		var randomNumDiv = $("<div id='random-number'>").text(randomNum);
		$("#random-area").html(randomNumDiv);
	}

	function updateDom(didUserWin){
		$('#winArea').empty();

		if (didUserWin === true){
			$('#winArea').append($('<p>').text(''));
			setGame();
			renderMatchingNumber();
		}else if(didUserWin === false) {
			$('#winArea').append($('<p>').text(''));
			setGame();
			renderMatchingNumber();
		}

		var wSpan = $('<span>').text(wins);
		var lSpan = $('<span>').text(losses);

		var pWins = $('<p>').text('Wins: ');
		var pLosses = $('<p>').text('Losses: ');

		pWins.append(wSpan);
		pLosses.append(lSpan);

		$('#winArea').append(pWins);
		$('#winArea').append(pLosses);
	}

	function renderDesserts(){
		//render desserts
		for (var key in desserts) {
			var dessertDiv = $("<div class='desserts-button' data-name='" + key + "'>");
		  	var dessertImg = $("<img alt='image' class='dessert-img' >").attr("src", desserts[key].imageUrl);
		    dessertDiv.append(dessertImg);
 //try this           
              
		    $("#desserts-area").append(dessertDiv);
            
            $(".desserts-button").css({"display":"inline"});
            
            $("img").css({"height":"230px", "width":"230px"})
		}
	}

	function updateMatchingNumber(th){
		var self = th;

		if (self.attr('data-name') == 'purple') {
			yourMatchingNumber = yourMatchingNumber + desserts[self.attr('data-name')].points;
		}else if (self.attr('data-name') == 'white') {
			yourMatchingNumber = yourMatchingNumber + desserts[self.attr('data-name')].points;
		}else if (self.attr('data-name') == 'pink') {
			yourMatchingNumber = yourMatchingNumber + desserts[self.attr('data-name')].points;
		}else{
			yourMatchingNumber = yourMatchingNumber + desserts[self.attr('data-name')].points;
		}
	}

	function renderMatchingNumber(){
		var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
		$("#score-area").html();
		$("#score-area").html(scoreNumDiv);
	}

	setGame();
	updateDom();
	renderDesserts();
	renderMatchingNumber();

	//create on.click event for desserts
	$(".desserts-button").on("click", function(event) {
		updateMatchingNumber($(this));
		renderMatchingNumber();

		//check if won or lost
		if (yourMatchingNumber == randomNum) {
			wins++;
			setGame();
			updateDom(true);
		}else if (yourMatchingNumber > randomNum) {
			losses++;
			setGame();
			updateDom(false);
		}
	});

});
