'use strict';

function total(){
	// Add total rice count from riddle... 
	let total = 0;
	for (let i = 1; i <= 64; i++){
		total += square(i)
	}
	return total;
};

function square(num){
	// write code here...
	return Math.pow(2, num - 1);
	
};

module.exports = square;
module.exports = total;
