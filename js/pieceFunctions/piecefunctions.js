var PieceFunctions = {}

PieceFunctions.getBoardPosition = function($el){


	console.log('getBoardPosition')
	
	if (!!$el) throw "no piece on board available!"

}

PieceFunctions.clearActiveSquares = function(){
	$('div.active-home-square').removeClass('active-home-square');
	$('div.movable').removeClass('movable');
	$('div.killable').removeClass('killable');
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

	if (!PieceFunctions.highLightAvailableMoves[type]) throw "no moves available for this type!";

	PieceFunctions.highLightAvailableMoves[type]( $piece );

}

PieceFunctions.friendlyPiece = function($targetPiece){ return false }

PieceFunctions.trySquare = function($origSquare, $piece, direction, coordinates, killOnly = false, moveOnly = false){

	$targetSquare = BoardFunctions.squareSelector[direction](coordinates);
	if (!$targetSquare) {
		console.log($targetSquare);
		throw 'baaarf'
	}
	
	$targetPiece = $targetSquare.children('.piece')

	if (PieceFunctions.friendlyPiece($targetPiece) ) return nil ;

	var targetPiecePresent = !!$targetPiece[0] ;

	
	if (killOnly){
		if (targetPiecePresent) {
			$targetSquare.addClass('killable');
			return $targetSquare;
		}
		
	} else if (moveOnly) {
		if (!targetPiecePresent) {
			$targetSquare.addClass('movable');
			return $targetSquare;
		}
	} else {
		
		if (targetPiecePresent) {
			$targetSquare.addClass('killable')
			return null;
		} else {
			$targetSquare.addClass('movable')
			return $targetSquare;
		}
	}

}


PieceFunctions.cardinalDirections = ['NorthOf', 'SouthOf', 'EastOf', 'WestOf'];
PieceFunctions.diagonalDirections = ['NorthEastOf', 'SouthEastOf', 'NorthWestOf', 'SouthWestOf'];

PieceFunctions.highLightAvailableMoves = {

	pawn: function($piece){
		console.log('moving like a pawn!!');

		var coordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $targetSquare;
		var $targetPiece;

		PieceFunctions.cardinalDirections.forEach(function(direction){
					PieceFunctions.trySquare($targetSquare, $piece, direction, coordinates, false, true)			
		});
		PieceFunctions.diagonalDirections.forEach(function(direction){
					PieceFunctions.trySquare($targetSquare, $piece, direction, coordinates, true, false)			
		});

	},
	king: function($piece){
		console.log('moving like a king!!');

		var coordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $targetSquare;
		var $targetPiece;

		PieceFunctions.cardinalDirections.forEach(function(direction){
					PieceFunctions.trySquare($targetSquare, $piece, direction, coordinates)			
		});
		PieceFunctions.diagonalDirections.forEach(function(direction){
					PieceFunctions.trySquare($targetSquare, $piece, direction, coordinates)			
		});
	},
	knight: function($piece){
		console.log('moving like a knight!!');
	},
	bishop: function($piece){
		console.log('moving like a bishop!!');

		var origCoordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $origSquare;
		var $targetPiece;
		var stillMoving;
		var newCoordinates;

		PieceFunctions.diagonalDirections.forEach(function(direction){
			var $this
			stillMoving = true;

			newCoordinates = origCoordinates;

			while(stillMoving){

				
				var $targetSquare = PieceFunctions.trySquare(1,1,direction,newCoordinates)||[];

				
				stillMoving = !!($targetSquare[0])

				console.log('stillMoving')
				console.log($targetSquare)
				console.log(stillMoving)
				console.log(direction)

				if (stillMoving){
					$targetSquare.css('border', 'solid 2px pink')
				
					newCoordinates = { x: $targetSquare.data('posx'), y: $targetSquare.data('posy') };	
				}
			}
		})

	},
	rook: function($piece){
		console.log('moving like a rook!!');
		var origCoordinates = { x: $piece.data('posx'), y: $piece.data('posy') };

		var $origSquare;
		var $targetPiece;
		var stillMoving;
		var newCoordinates;

		PieceFunctions.cardinalDirections.forEach(function(direction){
			var $this
			stillMoving = true;

			newCoordinates = origCoordinates;

			while(stillMoving){

				
				var $targetSquare = PieceFunctions.trySquare(1,1,direction,newCoordinates)||[];

				
				stillMoving = !!($targetSquare[0])

				console.log('stillMoving')
				console.log($targetSquare)
				console.log(stillMoving)
				console.log(direction)

				if (stillMoving){
					$targetSquare.css('border', 'solid 2px pink')
				
					newCoordinates = { x: $targetSquare.data('posx'), y: $targetSquare.data('posy') };	
				}
			}
		})



	},
	queen: function($piece){
		console.log('moving like a queen!!');
	}
}


BoardFunctions.squareSelector = {
	NorthOf: function(coordinates){  return $('.square[data-posx="' + (coordinates.x) + '"][data-posy="'+ (coordinates.y + 1) +'"]' ) },
	SouthOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x) + '"][data-posy="'+ (coordinates.y - 1) +'"]' ) },
	EastOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x + 1) + '"][data-posy="'+ (coordinates.y) +'"]' ) },
	WestOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x - 1) + '"][data-posy="'+ (coordinates.y) +'"]' )},
	NorthEastOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x + 1) + '"][data-posy="'+ (coordinates.y + 1) +'"]' )},
	SouthEastOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x + 1) + '"][data-posy="'+ (coordinates.y - 1) +'"]' )},
	NorthWestOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x - 1) + '"][data-posy="'+ (coordinates.y + 1) +'"]' )},
	SouthWestOf: function(coordinates){ return $('.square[data-posx="' + (coordinates.x - 1) + '"][data-posy="'+ (coordinates.y - 1) +'"]' )}
}







