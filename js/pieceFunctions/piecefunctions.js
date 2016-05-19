var PieceFunctions = {}

PieceFunctions.getBoardPosition = function($el){


	console.log('getBoardPosition')
	
	if (!!$el) throw "no piece on board available!"


}


PieceFunctions.clearActiveSquares = function(){
	$('div.active-home-square').removeClass('active-home-square');
	$('div.movable').removeClass('movable');
}


PieceFunctions.highlightOnlyHomeSpace = function($piece){
	PieceFunctions.clearActiveSquares();
	$piece.parent('.square').addClass('active-home-square')
}


PieceFunctions.activate = function($piece){
  	
  	PieceFunctions.highlightOnlyHomeSpace($piece);

	

	var side = $piece.data('side');
	if (!side) throw "no side determined!"
	var type = $piece.data('type');
	if (!type) throw "no type determined!"
 	

	if (!PieceFunctions.highLightAvailableMoves[type]) throw "no moves available for this type!"

  	PieceFunctions.highLightAvailableMoves[type]( $piece );


  }




PieceFunctions.highLightAvailableMoves = {

	pawn: function($piece){
		console.log('moving like a pawn!!');

		var coordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $targetSquare;
		var $targetPiece;



		$targetSquare = BoardFunctions.squareSelector.NorthOf(coordinates);
		$targetPiece = $targetSquare.children('.piece')
		
		if (!$targetPiece[0]) $targetSquare.addClass('movable');

		
		$targetSquare = BoardFunctions.squareSelector.SouthOf(coordinates);
		
		$targetPiece = $targetSquare.children('.piece')
		if (!$targetPiece[0]) $targetSquare.addClass('movable');

		
		$targetSquare = BoardFunctions.squareSelector.ToEastOf(coordinates);
		
		$targetPiece = $targetSquare.children('.piece')
		if (!$targetPiece[0]) $targetSquare.addClass('movable');

		
		$targetSquare = BoardFunctions.squareSelector.ToWestOf(coordinates);
		
		$targetPiece = $targetSquare.children('.piece')
		if (!$targetPiece[0]) $targetSquare.addClass('movable');


		$targetSquare = BoardFunctions.squareSelector.NorthEastOf(coordinates);
		
		$targetPiece = $targetSquare.children('.piece')
		if (!!$targetPiece[0]) $targetPiece.parent('.square').addClass('movable');

		
		$targetSquare = BoardFunctions.squareSelector.SouthEastOf(coordinates);
		
		$targetPiece = $targetSquare.children('.piece')
		if (!!$targetPiece[0]) $targetPiece.parent('.square').addClass('movable');

		
		$targetSquare = BoardFunctions.squareSelector.ToNorthWestOf(coordinates);
		
		$targetPiece = $targetSquare.children('.piece')
		if (!!$targetPiece[0]) $targetPiece.parent('.square').addClass('movable');

		
		$targetSquare = BoardFunctions.squareSelector.ToSouthWestOf(coordinates);
		
		$targetPiece = $targetSquare.children('.piece')
		if (!!$targetPiece[0]) $targetPiece.parent('.square').addClass('movable');

	},
	knight: function($piece){
		console.log('moving like a knight!!');
	},
	bishop: function($piece){
		console.log('moving like a bishop!!');
	},
	rook: function($piece){
		console.log('moving like a rook!!');
	},
	queen: function($piece){
		console.log('moving like a queen!!');
	},
	king: function($piece){
		console.log('moving like a king!!');
	}
}



BoardFunctions.squareSelector = {
	NorthOf: function(coordinates){  return $('.square[data-posx="' + (coordinates.x) + '"][data-posy="'+ (coordinates.y + 1) +'"]' ) },
	SouthOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x) + '"][data-posy="'+ (coordinates.y - 1) +'"]' ) },
	ToEastOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x + 1) + '"][data-posy="'+ (coordinates.y) +'"]' ) },
	ToWestOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x - 1) + '"][data-posy="'+ (coordinates.y) +'"]' )},
	NorthEastOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x + 1) + '"][data-posy="'+ (coordinates.y + 1) +'"]' )},
	SouthEastOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x + 1) + '"][data-posy="'+ (coordinates.y - 1) +'"]' )},
	ToNorthWestOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x - 1) + '"][data-posy="'+ (coordinates.y + 1) +'"]' )},
	ToSouthWestOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x - 1) + '"][data-posy="'+ (coordinates.y - 1) +'"]' )}
}







