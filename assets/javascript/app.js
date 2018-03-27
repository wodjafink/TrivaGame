var trivia_data = 
{ 
	"questionsArray" :[
		{
		"questionText" : "What dinosaur name means \"fast thief?\"",
		"answers" :[
			{"text" : "Pternodon", "correct": false},
			{"text" : "Nanotyrannus", "correct": false},
			{"text" : "Velociraptor", "correct": true},
			{"text" : "Sinocalliopteryx", "correct": false},
			],
		},
		{
		"questionText" : "What dinosaur fossil was originally mistaken for a type of bison?",
		"answers" :[
			{"text" : "Allosaurus", "correct": false},
			{"text" : "Stegosaurus", "correct": false},
			{"text" : "Buffalosaurus", "correct": false},
			{"text" : "Triceratops", "correct": true},
			],
		},
		{
		"questionText" : "When did dinosaurs become extinct?",
		"answers" :[
			{"text" : "7 million years ago", "correct": false},
			{"text" : "285 million years ago", "correct": false},
			{"text" : "65 million years ago", "correct": true},
			{"text" : "2 billion years ago", "correct": false},
			],
		},
		{
		"questionText" : "What were the direct ancestors of the dinosaurs?",
		"answers" :[
			{"text" : "Archosaurs", "correct": true},
			{"text" : "Eukaryotes", "correct": false},
			{"text" : "Sapheosaurs", "correct": false},
			{"text" : "Silesaurs", "correct": false},
			],
		},
		{			
		"questionText" : "What was the lifespan of a T. rex?",
		"answers" :[
			{"text" : "10 to 15 years", "correct": false},
			{"text" : "50 to 60 years", "correct": false},
			{"text" : "100 to 120 years", "correct": false},
			{"text" : "20 to 30 years", "correct": true},
			],
		},
		{
		"questionText" : "The meteor that many scientists believe killed the dinosaurs struck in what modern-day country?",
		"answers" :[
			{"text" : "South Africa", "correct": false},
			{"text" : "Mexico", "correct": true},
			{"text" : "Australia", "correct": false},
			{"text" : "United States", "correct": false},
			],
		},
		{
		"questionText" : "What dinosaur was, for many years, mistakenly called a Brontosaurus?",
		"answers" :[
			{"text" : "Apatosaurus", "correct": true},
			{"text" : "Rigidosaurus", "correct": false},
			{"text" : "Brachiosaurus", "correct": false},
			{"text" : "Arcanosaurus", "correct": false},
			],
		},
		{
		"questionText" : "Which of the following dinosaurs had a giraffe-like neck?",
		"answers" :[
			{"text" : "Allosaurus", "correct": false},
			{"text" : "Torvosaurus", "correct": false},
			{"text" : "Ankylosaurus", "correct": false},
			{"text" : "Brachiosaurus", "correct": true},
			],
		},
		{
		"questionText" : "What is the only dinosaur lineage to survive the mass extinction event?",
		"answers" :[
			{"text" : "Frogs", "correct": false},
			{"text" : "Snakes", "correct": false},
			{"text" : "Birds", "correct": true},
			{"text" : "Lizards", "correct": false},
			],
		},
		{
		"questionText" : "Which dinosaur had fifteen horns?",
		"answers" :[
			{"text" : "Pachyrhinosaurus", "correct": false},
			{"text" : "Styracosaurus", "correct": false},
			{"text" : "Diabloceratops", "correct": false},
			{"text" : "Kosmoceratops", "correct": true},
			]
		}
	]
}

// Array to track random indexes; this shuffles the order of the questions
var randomizeArray = [];

// Keeps track of the user's score
var score = 0;

// Variable switchQuestion will hold the setInterval when we start the Trivia
var intervalId;

var trackTimeout;

// Count will keep track of how many questions we've ran through
var count = 0;

var question;

var inAnswerState = false;
var haveCorrectAnswer = false;

// This timer object will count down in between questions
var countDownTimer = {
	time: 0,
	timerRunning: false,
	reset: function() {
		countDownTimer.timerRunning = false;
		countDownTimer.time = 0;
	},
	// start takes in time to count in seconds, calculates millis for you
	start: function(newTime) {
		if (!countDownTimer.timerRunning)
		{
			clearTimeout(trackTimeout);
			countDownTimer.timerRunning = true;
			clearInterval(intervalId);
			countDownTimer.time = newTime;
			// This will trigger the event to go to the next question
			console.log("Start count down at " + (newTime+1));
			trackTimeout = setTimeout(countDownTimer.expire, (newTime+1) * 1000)
			// This will show the 'count down'
			intervalId = setInterval(countDownTimer.count, 1000);
			// Good to do in the beginning to show the user they have 20 seconds
			countDownTimer.display();
		}
	},
	expire: function() {
		console.log("Expire, answer state is " + inAnswerState);
		if (!inAnswerState){
			clearScreen();
			clearTimeout(trackTimeout);
			countDownTimer.timerRunning = false;
			displayOutOfTimeScreen();
		}
		else{
			clearTimeout(trackTimeout);
			countDownTimer.timerRunning = false;
			clearScreen();
			nextQuestion();
		}

	},
	count: function() {
		countDownTimer.time--;
		countDownTimer.display();
	},
	display: function(){
		$("#timer-area").text("You have " + countDownTimer.time + " seconds left");
	}
}

function clearScreen(){
	// $("#answer-section").empty();
	clearAnswerOptions();
	$("#response").empty();
	$("#list-correct").empty();
	$("#list-user-answer").empty();
}

function clearAnswerOptions(){
	$("#answer-1").empty();
	$("#answer-2").empty();
	$("#answer-3").empty();
	$("#answer-4").empty();
}

function nextQuestion(){

	count++;

	// Clear both flags here because we are going on to the next question
	inAnswerState = false;
	haveCorrectAnswer = false;
	console.log("Going to next question " + count + " answer state is " + inAnswerState);

	displayTriviaQuestion();

	if (count === trivia_data.questionsArray.length)
		count = 0;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function displayTriviaQuestion(){
	question = trivia_data.questionsArray[randomizeArray[count]];

	console.log("Display question " + count);
	$("#question").text(question.questionText);

	$("#answer-1").text(question.answers[0].text)
	$("#answer-2").text(question.answers[1].text)
	$("#answer-3").text(question.answers[2].text)
	$("#answer-4").text(question.answers[3].text)
		// $("#answer-section").empty();
	countDownTimer.start(20);
}

function displayOutOfTimeScreen(){

	inAnswerState = true;

	console.log("Displaying out of time screen, answer state is " + inAnswerState);
	$("#response").html('<h1>Ran out of time...</h1>');

	$("#list-correct").text("Correct answer : ");
	question.answers.forEach(function(answer){
		if (answer.correct === true)
		{
			$("#list-correct").append(answer.text);
		}
	})
	countDownTimer.start(5);

}

function displayWinScreen(answerIndex){
	score++;

	console.log("Displaying win screen");

	inAnswerState = true;
	// $("#answer-section").empty();
	clearAnswerOptions();

	$("#response").html('<h1>Correct!!</h1>');
	$("#list-correct").text("Correct answer :");
	$("#list-correct").append(question.answers[answerIndex].text);
	countDownTimer.start(5);
}

function displayLoseScreen(answerIndex){
	console.log("Displaying lose screen");
	inAnswerState = true;
	var brAdd = $("<br>");
	// $("#answer-section").empty();
	clearAnswerOptions();

	$("#response").html('<h1>Incorrect!!</h1>');
	$("#list-user-answer").text("Your answer : ");
	$("#list-user-answer").append(question.answers[answerIndex].text);
	$("#list-correct").text("Correct answer : ");
	question.answers.forEach(function(answer){
		if (answer.correct === true)
		{
			$("#list-correct").append(answer.text);
		}
	})
	countDownTimer.start(5);

}

$(document).ready(function () {

	score = 0;

  // var url = "https://raw.githubusercontent.com/wodjafink/TriviaGame/master/assets/javascript/trivia_data.json"

  //   $.ajax({
  //       url: url,
  //     }).done(function(response) {
  //       console.log(response)
  //       trivia_data = JSON.parse(response);
  //     });

      // trivia_data = JSON.parse

	for (var i = 0; i < trivia_data.questionsArray.length; i++)
	{
		randomizeArray.push(i);
	}

	shuffleArray(randomizeArray);

	// startTrivia();
	countDownTimer.start(20);
	displayTriviaQuestion()

	// highlight based on which one the user selects
	$('#answer-section').children().mouseover(function(e){
	    $(".hover").removeClass("hover");     
	    $(this).addClass("hover");
	}).mouseout(function(e) {
	    $(this).removeClass("hover");
	});

	$('#answer-section').on('click', '*', function(){
		countDownTimer.reset();
		var clickedId = $(this).attr('id');
		// Maybe a better way, going to cut out the substring from the ID to get an index
		var answerIndex = clickedId.substring(clickedId.length - 1);
		if (question.answers[answerIndex-1].correct){
			displayWinScreen(answerIndex-1);
		}
		else{
			displayLoseScreen(answerIndex-1);
		}
	})

})

