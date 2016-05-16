BoardFunctions.placePiece = function(type, side, $square){

  var piece = $("<div class='piece side-" + side + " piece-" + type + "' draggable='true'></div>");

  $square.append(piece);


piece[0].addEventListener('dragstart', PieceFunctions.handlePiecePickup, false);

piece[0].addEventListener('drop', PieceFunctions.handlePieceDrop, false);


}

PieceFunctions.handlePiecePickup = function(e){
  console.log('piece picked up!')
  var imgUrl = $(e.target).css('background-image')
  var img = document.createElement("img");
  imgUrl = imgUrl.split('"')[1];
  img.src = imgUrl;
  e.dataTransfer.setDragImage(img, 0,0)

  e.dataTransfer.effectAllowed = 'move';

}

PieceFunctions.handlePieceDrop = function(e){
  console.log('piece dropped!')
}