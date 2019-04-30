// create a variable to store speech recognition object
var foo;
var myRec;
var parseResult;
function setup(){
	// speech recognition object (will prompt for mic access)
	// foo = new p5.SpeechRec('en-US');
	var foo = new p5.SpeechRec('en-US'); // new P5.SpeechRec object



	createCanvas(windowWidth, windowHeight);
	noLoop();

	// boolean to set whether the speech recognition engine will
	// give results continuously (true) or just once (false).
	// Default is false.
	foo.continuous = true;
	// myRec.continuous = true; // do continuous recognition

	// boolean to set whether the speech recognition engine will give
	// faster, partial results (true) or wait for the speaker to pause (false).
	// Default is false
	foo.interimResults = true;
	// myRec.interimResults = true;

	// function sets callback to fire when speech is recognized and a result has been reported.
	foo.onResult = showResult;
	// myRec.onResult = showResult;

	// function sets callback to fire when an error occurs on the client side in recording and transmitting the speech.
	foo.onError = showError;
	// myRec.onError = showError;

	// instructs the speech recognition system to start listening
	foo.start();
	// myRec.start();
}

// ????????????????????????????????must have draw function to work?
function draw(){
}

function showError(){
	console.log('There is an error');
	text('There is an error', windowWidth/2, windowHeight/2);
}

function showResult(){
	// resultValue stores the boolean value containing a status flag reported by the server
	// true = speech successfully recognized
	console.log(foo.resultValue);
	// console.log(myRec.resultValue);

	// resultConfidence stores the confidence level of the speech synthesizer that resultString is what was actually spoken by the user.
	// gives a float value from 0.0 to 1.0
	// console.log(foo.resultConfidence);
	// console.log(myRec.resultConfidence);
	// text("I am this much confident: " + foo.resultConfidence, random(width), random(height)-random(height));

	// the resultString contains the string of the most recently detected speech
	console.log(foo.resultString);
	text(foo.resultString, random(width), random(height));

	// console.log(myRec.resultString);
	// text(myRec.resultString, random(width), random(height));


}
