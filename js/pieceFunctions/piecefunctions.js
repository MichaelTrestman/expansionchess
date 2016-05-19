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

		console.log(coordinates);

		$('.square[data-posx="' + (coordinates.x+1) + '"][data-posy="'+ (coordinates.y) +'"]' ).addClass('movable');
		$('.square[data-posx="' + (coordinates.x) + '"][data-posy="'+ (coordinates.y+1) +'"]' ).addClass('movable');
		$('.square[data-posx="' + (coordinates.x-1) + '"][data-posy="'+ (coordinates.y) +'"]' ).addClass('movable');
		$('.square[data-posx="' + (coordinates.x) + '"][data-posy="'+ (coordinates.y-1) +'"]' ).addClass('movable');
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













