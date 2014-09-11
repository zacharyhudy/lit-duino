var five  = require('johnny-five');
	board = new five.Board();
var led;
var toggleState = false;

board.on("ready", function(){
	console.log('Board ready');
	led = new five.Led(13);

	setInterval(toggleLED, 1000);

	function toggleLED(){
		toggleState = !toggleState;

		if(toggleState) led.on();
		else led.off();
	}
});
console.log("\nWaiting for device to connect...");