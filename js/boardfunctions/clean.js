BoardFunctions.clean = function(){

  config = this.config;
  containerDiv = this.containerDiv;

  var selector = '#' + containerDiv;

  var height = config.height,
  width = config.width,
  board_container = $(selector);


  for (var i = 0; i < height; i++) {

    board_container.append('<div class="row" id ="row-'+i+'"></div>')
    var thisRow = $('#row-'+i)
    var rowMod = i%2

    for (var j = 0; j < width; j++) {
      var squareMod = (j + rowMod)%2
      var squareColor = squareMod == 0 ? 'dark' : 'light'
      thisRow.append('<div class="square square-' +  squareColor  +  '" id ="square-' + j + '"></div>')
    };

  };
  return this
}
