var BoardFunctions = {}
var PieceFunctions = {}


BoardFunctions.squareClick = function(e){

	$square = $(e.target);

	console.log($square);

	if ( $square.hasClass('square') && $square.children('.piece').length == 0 ) {
		console.log('empty square clicked!');
		PieceFunctions.clearActiveSquares();
	}
	
}