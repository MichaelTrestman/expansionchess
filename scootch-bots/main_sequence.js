
      
      var botArmy = [];

      for (var q = 0; q < 200; q ++){
        botArmy[q] 
            = new Bot(q, [Math.floor(Math.random() *2000), Math.floor(Math.random() *1000) ], (   Math.floor(Math.random() * 20) + 25 ));
      }

      var mouseControlled = 0;
      var newColor;
      var pauseNow = false;
      var counter = 0;
      var counterOther = 0;
      var botsColorChange = false;
      var change = false;
      var gravity = false;
      var friction = false;
      var scaryList = []
      ;
      var trail = false;
      pC.rate = [30, 0];
      pC2.rate = [-30, 0];
      
      setInterval(function(){   

        if (pauseNow){ 

          console.log('scootch-bots!!!');

          document.addEventListener('keydown', function(event) {
            if (event.keyCode == 79){ pauseNow = false;}
  //          if (event.keyCode == 71){ gravity = true;}
    //        if (event.keyCode == 84){ gravity = false;}

    
          });
            




      } else {

      if (trail == false){context.clearRect(0,0,canvas.width,canvas.height);};
      
      /*
      counterOther ++;
      if (counterOther > 51) {botsColorChange = true; counterOther = 0; newColor = colorS[Math.floor(Math.random()* 5)];};

      
      document.addEventListener('keydown', function(event) {

        if (event.keyCode == 82) {change = true;}

      }); 

        //counter ++;
        //if (counter > 100) {change = true;};
        if (change) {
          counter = 0;
          botsColorChange = true;
          newColor = colorS[Math.floor(Math.random()* 5)];
          context.clearRect(0,0,canvas.width,canvas.height);
          pC.rate = [ Math.floor(Math.random()*100 - 50), Math.floor(Math.random()*100 - 50)  ];
          pC2.rate = [ Math.floor(Math.random()*100 - 50), Math.floor(Math.random()*10 - 50)  ];
          change = false;
        }*/

        
        
        //context.clearRect(0,0,canvas.width,canvas.height)
        if (friction){
          pCFriction(pC);
          pCFriction(pC2);
        }
        if (gravity){
          pCGravity(pC);
          pCGravity(pC2);
        }

        pCMove(pC);
        renderPC(pC);
        pC2Move(pC2);
        renderPC(pC2);

        for (var xx = 0; xx < botArmy.length; xx++) {
          
          if (botsColorChange) {botArmy[xx].color = newColor;}

          var distObstacle =

            (botArmy[xx].bodyPos[0] - pC.pos[0])*(botArmy[xx].bodyPos[0] - pC.pos[0]) +
            (botArmy[xx].bodyPos[1] - pC.pos[1])*(botArmy[xx].bodyPos[1] - pC.pos[1]) ;

          var distObstacleTail =
            (botArmy[xx].tailPos[0] - pC.pos[0])*(botArmy[xx].tailPos[0] - pC.pos[0]) +
            (botArmy[xx].tailPos[1] - pC.pos[1])*(botArmy[xx].tailPos[1] - pC.pos[1]) ;          

          var distSought =
            
            (botArmy[xx].headPos[0] - pC2.pos[0])*(botArmy[xx].headPos[0] - pC2.pos[0]) +
            (botArmy[xx].headPos[1] - pC2.pos[1])*(botArmy[xx].headPos[1] - pC2.pos[0]) ;


          if ( (distObstacle < 650*650)   ) {

            //botArmy[xx].flip();
            botArmy[xx].flee(pC);
            console.log('fleeing!');
          } else {
            botArmy[xx].seekTarget(pC2);  
          };
          botArmy[xx].render();
          
          //botArmy[xx].avoidThing(pC
/*
          for (var xx = 0; xx < botArmy.length; xx++) {
          
          var distObstacle =

            (botArmy[xx].bodyPos[0] - pC2.pos[0])*(botArmy[xx].bodyPos[0] - pC2.pos[0]) +
            (botArmy[xx].bodyPos[1] - pC2.pos[1])*(botArmy[xx].bodyPos[1] - pC2.pos[1]) ;

          var distObstacleTail =
            (botArmy[xx].tailPos[0] - pC2.pos[0])*(botArmy[xx].tailPos[0] - pC2.pos[0]) +
            (botArmy[xx].tailPos[1] - pC2.pos[1])*(botArmy[xx].tailPos[1] - pC2.pos[1]) ;          

          var distSought =
            
            (botArmy[xx].headPos[0] - pC2.pos[0])*(botArmy[xx].headPos[0] - pC2.pos[0]) +
            (botArmy[xx].headPos[1] - pC2.pos[1])*(botArmy[xx].headPos[1] - pC2.pos[0]) ;


          if ( (distObstacle < 650*650)   ) {

            //botArmy[xx].flip();
            botArmy[xx].flee(pC2);
            console.log('fleeing!')

          } else {
            console.log('seeking')
            botArmy[xx].seekTarget(pC2);  
          };
          //botArmy[xx].avoidThing(pC);

          botArmy[xx].render();

        }
        */
        //borky.moveLeft(); 

        //borky.seekTarget(target);
        //borky.render();
        //corky.seekTarget(target);
        //corky.render();

        //context.beginPath();
        //context.arc(target.pos[0], target.pos[1], 80, 0, (2 * Math.PI), false);
        //context.fillStyle = 'red';
        //context.fill();
        //context.lineWidth = 2;
        //context.strokeStyle = 'red'
        //context.stroke();
      }}}
    , 50);
