var trivia_data = 
{ 
	"questionsArray" :[

		{
		"question" : "What dinosaur name means \"fast thief?\"",
		"answers" :[
			{"textA" : "Pternodon", "correct": false},
			{"textB" : "Nanotyrannus", "correct": false},
			{"textC" : "Velociraptor", "correct": true},
			{"textD" : "Sinocalliopteryx", "correct": false},
			],
		},
		{
		"question" : "What dinosaur fossil was originally mistaken for a type of bison?",
		"answers" :[
			{"textA" : "Allosaurus", "correct": false},
			{"textB" : "Stegosaurus", "correct": false},
			{"textC" : "Buffalosaurus", "correct": false},
			{"textD" : "Triceratops", "correct": true},
			],
		},
		{
		"question" : "When did dinosaurs become extinct?",
		"answers" :[
			{"textA" : "7 million years ago", "correct": false},
			{"textB" : "285 million years ago", "correct": false},
			{"textC" : "65 million years ago", "correct": true},
			{"textD" : "2 billion years ago", "correct": false},
			],
		},
		{
		"question" : "What were the direct ancestors of the dinosaurs?",
		"answers" :[
			{"textA" : "Archosaurs", "correct": true},
			{"textB" : "Eukaryotes", "correct": false},
			{"textC" : "Sapheosaurs", "correct": false},
			{"textD" : "Silesaurs", "correct": false},
			],
		},
		{			
		"question" : "What was the lifespan of a T. rex?",
		"answers" :[
			{"textA" : "10 to 15 years", "correct": false},
			{"textB" : "50 to 60 years", "correct": false},
			{"textC" : "100 to 120 years", "correct": false},
			{"textD" : "20 to 30 years", "correct": true},
			],
		},
		{
		"question" : "The meteor that many scientists believe killed the dinosaurs struck in what modern-day country?",
		"answers" :[
			{"textA" : "South Africa", "correct": false},
			{"textB" : "Mexico", "correct": true},
			{"textC" : "Australia", "correct": false},
			{"textD" : "United States", "correct": false},
			],
		},
		{
		"question" : "What dinosaur was, for many years, mistakenly called a Brontosaurus?",
		"answers" :[
			{"textA" : "Apatosaurus", "correct": true},
			{"textB" : "Rigidosaurus", "correct": false},
			{"textC" : "Brachiosaurus", "correct": false},
			{"textD" : "Arcanosaurus", "correct": false},
			],
		},
		{
		"question" : "Which of the following dinosaurs had a giraffe-like neck?",
		"answers" :[
			{"textA" : "Allosaurus", "correct": false},
			{"textB" : "Torvosaurus", "correct": false},
			{"textC" : "Ankylosaurus", "correct": false},
			{"textD" : "Brachiosaurus", "correct": true},
			],
		},
		{
		"question" : "What is the only dinosaur lineage to survive the mass extinction event?",
		"answers" :[
			{"textA" : "Frogs", "correct": false},
			{"textB" : "Snakes", "correct": false},
			{"textC" : "Birds", "correct": true},
			{"textD" : "Lizards", "correct": false},
			],
		},
		{
		"question" : "Which dinosaur had fifteen horns?",
		"answers" :[
			{"textA" : "Pachyrhinosaurus", "correct": false},
			{"textB" : "Styracosaurus", "correct": false},
			{"textC" : "Diabloceratops", "correct": false},
			{"textD" : "Kosmoceratops", "correct": true},
			]
		}
	]
}

$(document).ready(function () {

	console.log(trivia_data.questionsArray.length)

	console.log(trivia_data.questionsArray[0].question)
	// $.getJSON( "trivia_data.json", function( data ) {
	//   var items = [];
	//   $.each( data, function( key, val ) {
	//     items.push( "<li id='" + key + "'>" + val + "</li>" );
	//   });
	 
	//   $( "<ul/>", {
	//     "class": "my-new-list",
	//     html: items.join( "" )
	//   }).appendTo( "body" );
	// });

})