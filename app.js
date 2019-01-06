var topics = 	["BTS", "Got7", "EXO", "BAP", "Vixx", 
				"Shinee", "Infinite", "Red Velvet", "Twice"];

function buttonMaker() {

	$("#kpop-buttons").empty();

	for (var i = 0; i < topics.length; i++) {
		$("#kpop-buttons").append("<button type=button class='topic-button btn btn-primary'>" + topics[i] + "</button>");
	};

};

buttonMaker();

$("#additional").on("click", function(event) {
	event.preventDefault();
	var userInput = $("#kpop-input").val().trim();

	if (!userInput == " ") {
		topics.push(userInput);
		buttonMaker();
		console.log(topics);
		userInput = $("#kpop-input").val(" ");
	}
});

$(document).on("click", ".topic-button", function() {
	$("#kpop-gif").empty(); 

	var apiKey = "c64ca2f719e54ca5baaaf7946271c6e4";
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apiKey + "&limit=10";
	
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response.data); 

		var results = response.data;

		for (var j = 0; j < results.length; j++) {

			var newImage = $("<img>");
			newImage.attr("src", results[j].images.fixed_height_still.url);
			newImage.attr("alt", "missing gif");
			newImage.attr("id", "new-gif" + j);

			$("#kpop-gif").append(newImage);

			
		}
		var isMoving0 = false;
		$(document).on("click", "#new-gif0" , function() {

			if (!isMoving0) {
				$("#new-gif0").attr("src", results[0].images.fixed_height.url); 
				isMoving0 = true;
			} else {
				$("#new-gif0").attr("src", results[0].images.fixed_height_still.url); 
				isMoving0 = false;
			}

		});

		//gif #1
		var isMoving1 = false;
		$(document).on("click", "#new-gif1" , function() {

			if (!isMoving1) {
				$("#new-gif1").attr("src", results[1].images.fixed_height.url); 
				isMoving1 = true;
			} else {
				$("#new-gif1").attr("src", results[1].images.fixed_height_still.url); 
				isMoving1 = false;
			}

		});

		//gif #2
		var isMoving2 = false;
		$(document).on("click", "#new-gif2" , function() {

			if (!isMoving2) {
				$("#new-gif2").attr("src", results[2].images.fixed_height.url); 
				isMoving2 = true;
			} else {
				$("#new-gif2").attr("src", results[2].images.fixed_height_still.url); 
				isMoving2 = false;
			}

		});

		//gif #3
		var isMoving3 = false;
		$(document).on("click", "#new-gif3" , function() {

			if (!isMoving3) {
				$("#new-gif3").attr("src", results[3].images.fixed_height.url); 
				isMoving3 = true;
			} else {
				$("#new-gif3").attr("src", results[3].images.fixed_height_still.url); 
				isMoving3 = false;
			}

		});


		//gif #4
		var isMoving4 = false;
		$(document).on("click", "#new-gif4" , function() {

			if (!isMoving4) {
				$("#new-gif4").attr("src", results[4].images.fixed_height.url); 
				isMoving4 = true;
			} else {
				$("#new-gif4").attr("src", results[4].images.fixed_height_still.url); 
				isMoving4 = false;
			}

		});


		//gif #5
		var isMoving5 = false;
		$(document).on("click", "#new-gif5" , function() {

			if (!isMoving5) {
				$("#new-gif5").attr("src", results[5].images.fixed_height.url); 
				isMoving5 = true;
			} else {
				$("#new-gif5").attr("src", results[5].images.fixed_height_still.url); 
				isMoving5 = false;
			}

		});


		//gif #6
		var isMoving6 = false;
		$(document).on("click", "#new-gif6" , function() {

			if (!isMoving6) {
				$("#new-gif6").attr("src", results[6].images.fixed_height.url); //makes the gif move
				isMoving6 = true;
			} else {
				$("#new-gif6").attr("src", results[6].images.fixed_height_still.url); //makes the gif stop
				isMoving6 = false;
			}

		});


		//gif #7
		var isMoving7 = false;
		$(document).on("click", "#new-gif7" , function() {

			if (!isMoving7) {
				$("#new-gif7").attr("src", results[7].images.fixed_height.url); 
				isMoving7 = true;
			} else {
				$("#new-gif7").attr("src", results[7].images.fixed_height_still.url);
				isMoving7 = false;
			}

		});


		//gif #8
		var isMoving8 = false;
		$(document).on("click", "#new-gif8" , function() {

			if (!isMoving8) {
				$("#new-gif8").attr("src", results[8].images.fixed_height.url); 
				isMoving8 = true;
			} else {
				$("#new-gif8").attr("src", results[8].images.fixed_height_still.url); 
				isMoving8 = false;
			}

		});


		//gif #9
		var isMoving9 = false;
		$(document).on("click", "#new-gif9" , function() {

			if (!isMoving9) {
				$("#new-gif9").attr("src", results[9].images.fixed_height.url); 
				isMoving9 = true;
			} else {
				$("#new-gif9").attr("src", results[9].images.fixed_height_still.url); 
				isMoving9 = false;
			}

		});


	});



})