BoardFunctions.placePiece = function(type, side, $square){

  var piece = $("<div class='piece side-" + side + " piece-" + type + "' draggable='true'></div>");

  $square.append(piece);

  setTimeout(function(){
    piece[0].addEventListener('dragstart', PieceFunctions.handlePiecePickup, false);

  }, 10);

}

PieceFunctions.handlePiecePickup = function(e){
  console.log('e.target')
  var imgUrl = $(e.target).css('background-image')
  var img = document.createElement("img");
  imgUrl = imgUrl.split('"')[1];
  img.src = imgUrl;
  e.dataTransfer.setDragImage(img, 0,0)

  // $(piece).css('background-color', 'rgba(0,0,0,0.0)')

}