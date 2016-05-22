BoardFunctions.placePiece = function(type, side, $square){

  var pieceRotation = 'rotate(' + String(0 - BoardFunctions.currentBoardRotation) + 'deg)'

  var $piece = $("<div></div>")
    .addClass('piece')
    .addClass('piece-' + type)
    .addClass('side-' + side)
    .attr('draggable', 'false')
    .attr('data-type', type)
    .attr('data-side', side)
    .attr('data-posX', $square[0].dataset.posx)
    .attr('data-posY', $square[0].dataset.posy)
    .css('transform', pieceRotation);


  if (   !($piece.data('type')=='wall')  ){
    var img = $('<svg class="piece-image" src="img/chesspieces/' + type + '.svg"></svg>');
  img.css('fill', 'blue');

  $piece.append(img)
  }


  if ($square.hasClass('square')) {
    $square.children('.piece').remove();
  } else if ($square.hasClass('pieces-picker')){

  } else {
    throw 'Target is not a square!!!'
  };

  $square.append($piece);
}
