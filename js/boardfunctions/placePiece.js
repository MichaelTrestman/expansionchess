BoardFunctions.placePiece = function(type, side, $square){

  var pieceRotation = 'rotate(' + String(0 - BoardFunctions.currentBoardRotation) + 'deg)'

  var piece = $("<div></div>")
    .addClass('piece')
    .addClass('piece-' + type)
    .addClass('side-' + side)
    .attr('draggable', 'false')
    .attr('data-type', type)
    .attr('data-side', side)
    .attr('data-posX', $square[0].dataset.posx)
    .attr('data-posY', $square[0].dataset.posy)
    .css('transform', pieceRotation)
    .on('dragstart', drag)
    .on('click', PieceFunctions.handleClick);

  if ($square.hasClass('square')) {
    $square.children('.piece').remove();
  } else if ($square.hasClass('pieces-picker')){

  } else {
    throw 'Target is not a square!!!'
  };

  $square.append(piece);
  return piece
}

PieceFunctions.handleClick = function(e){

  var $targetPiece = $(e.target);

  // if target is on a square (i.e. on the board), do nothing;

  if ( $targetPiece.parent('.square').length > 0 ) return;

  if(  !($targetPiece.hasClass('piece')) ) throw 'this thing is not even a piece!'

  PieceFunctions.setAsPieceToPlace($targetPiece)

}

PieceFunctions.setAsPieceToPlace = function($piece){
  var side = $piece.data('side');
  var type = $piece.data('type');
  BoardFunctions.pieceToPlace = {side: side, type: type}
  console.log(BoardFunctions.pieceToPlace)

}


function allowDrop(ev) {
    ev.preventDefault();
}

function isPieceClass(c){
  return c.match(/piece-/);
}

function drag(ev) {

  var pieceData = ev.target.dataset;

  if(!(pieceData.type == 'wall') ) {

    var imgPath = $(ev.target).css('background-image').split('"')[1].split(/http:\/\/|file:\/\/\/|"\)/)[1];


    imgPath = imgPath.split('chessboard_new/')[1]

    console.log(imgPath)

    var img = $("<img></img>").attr('src', imgPath)[0];


    // ev.originalEvent.dataTransfer.setDragImage( $(ev.target).clone().css('border', 'solid 10px pink')[0] ,50,50);
    ev.originalEvent.dataTransfer.setDragImage(img,50,50);

  }



  ev.originalEvent.dataTransfer.setData('piece-side', pieceData.side);
  ev.originalEvent.dataTransfer.setData('piece-type', pieceData.type);
  ev.originalEvent.dataTransfer.setData('piece-posX', pieceData.posx);
  ev.originalEvent.dataTransfer.setData('piece-posY', pieceData.posy);
}

function drop(ev) {
    ev.preventDefault();

    var side = ev.originalEvent.dataTransfer.getData('piece-side');

    var type = ev.originalEvent.dataTransfer.getData('piece-type');



    var oldPiecePosX = ev.originalEvent.dataTransfer.getData('piece-posX');

    var oldPiecePosY = ev.originalEvent.dataTransfer.getData('piece-posY');

    var oldPieceSelector = '.piece';
    oldPieceSelector += '[data-posX="' +  oldPiecePosX + '"]';
    oldPieceSelector += '[data-posY="' +  oldPiecePosY + '"]';

    $(oldPieceSelector).remove();

    var $target = $(ev.target);

    if ($target.hasClass('piece')) {
      $target = $target.parent()

    }

    if (!$target.hasClass('square')) {
      throw 'Target is not square!'
    };

    BoardFunctions.placePiece(type, side, $target)
}
