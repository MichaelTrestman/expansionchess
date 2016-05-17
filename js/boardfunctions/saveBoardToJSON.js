BoardFunctions.saveBoardToJSON = function(){
  var board={};
  var $domBoard = $('#board')
  var topRow = $domBoard.children('.row')[0]

  board.height = $domBoard.children('.row').length
  board.width = $(topRow).children('.square').length

  var piecesOnBoard = $('.piece:not(.picker-piece)').toArray();

  board.pieces = $.map(piecesOnBoard, function(piece, i){
    return {
      posx: piece.dataset.posx,
      posy: piece.dataset.posy,
      type: piece.dataset.type,
      side: piece.dataset.side
    }
  })
  return board
}