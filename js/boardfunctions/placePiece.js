BoardFunctions.placePiece = function(type, side, $square){

  // var piece = $("<div class='piece side-" + side + " piece-" + type + "' data-piece-type='"+type+"' data 'draggable='true' ondragstart='drag(event)' ></div>");
  console.log('$square[0].dataset')
  console.log($square[0].dataset)

  var piece = $("<div></div>");
  piece.addClass('piece')
  piece.addClass('piece-' + type)
  piece.addClass('side-' + side)
  piece.attr('draggable', 'true')
  piece.attr('data-type', type)
  piece.attr('data-side', side)
  piece.attr('data-posX', $square[0].dataset.posx)
  piece.attr('data-posY', $square[0].dataset.posy)
  piece.on('dragstart', drag)

  $square.append(piece);

// piece[0].addEventListener('dragstart', PieceFunctions.handlePiecePickup, false);

// piece[0].addEventListener('drop', PieceFunctions.handlePieceDrop, false);


}


function allowDrop(ev) {

    ev.preventDefault();
    console.log('allowing drop!')
}

function drag(ev) {
    // ev.originalEvent.dataTransfer.setData("text", ev.target.id);
    var pieceData = ev.target.dataset;

    console.log("pieceData.side")
    console.log(pieceData.side)
    ev.originalEvent.dataTransfer.setData('piece-side', pieceData.side)

    console.log('type')
    console.log(pieceData.type)
    ev.originalEvent.dataTransfer.setData('piece-type', pieceData.type)

    console.log('posx')
    console.log(pieceData.posx)
    ev.originalEvent.dataTransfer.setData('piece-posX', pieceData.posx)



    console.log('posy')
    console.log(pieceData.posy)
    ev.originalEvent.dataTransfer.setData('piece-posY', pieceData.posy)

}

function drop(ev) {
    ev.preventDefault();
    console.log('drop it like its hot')
    console.log(ev)
    // console.log(ev.originalEvent.dataTransfer.getData('obj'))

    console.log('original piece was a:')
    console.log("ev.originalEvent.dataTransfer.getData('piece-side')")
    console.log(ev.originalEvent.dataTransfer.getData('piece-side'))
    var side = ev.originalEvent.dataTransfer.getData('piece-side');

    console.log("ev.originalEvent.dataTransfer.getData('piece-type')")
    console.log(ev.originalEvent.dataTransfer.getData('piece-type'))
    var type = ev.originalEvent.dataTransfer.getData('piece-type');

    BoardFunctions.placePiece(type, side, $(ev.target))

    console.log("ev.originalEvent.dataTransfer.getData('piece-posX')");
    console.log(ev.originalEvent.dataTransfer.getData('piece-posX'));

    console.log("ev.originalEvent.dataTransfer.getData('piece-posY')");
    console.log(ev.originalEvent.dataTransfer.getData('piece-posY'));

    var oldPiecePosX = ev.originalEvent.dataTransfer.getData('piece-posX');
    var oldPiecePosY = ev.originalEvent.dataTransfer.getData('piece-posY');

    var oldPieceSelector = '.piece';
    oldPieceSelector += '[data-posX="' +  oldPiecePosX + '"]';
    oldPieceSelector += '[data-posY="' +  oldPiecePosY + '"]';
    console.log("oldPieceSelector");
    console.log(oldPieceSelector);
    $(oldPieceSelector).remove();


}





// PieceFunctions.handlePiecePickup = function(e){
//   console.log('piece picked up!')
//   var imgUrl = $(e.target).css('background-image')
//   var img = document.createElement("img");
//   imgUrl = imgUrl.split('"')[1];
//   img.src = imgUrl;
//   e.dataTransfer.setDragImage(img, 0,0)

//   e.dataTransfer.effectAllowed = 'move';

// }

// PieceFunctions.handlePieceDrop = function(e){
//   console.log('piece dropped!')
// }