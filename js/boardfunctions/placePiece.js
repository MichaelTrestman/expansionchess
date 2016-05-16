BoardFunctions.placePiece = function(type, side, square){
  square.append("<div class='piece side-" + side + " piece-" + type + "'></div>")
}