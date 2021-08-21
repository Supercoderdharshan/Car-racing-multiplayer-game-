class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100, 300);
    car2 = createSprite(300, 300);
    car3 = createSprite(500, 300);
    car4 = createSprite(700, 300);
    cars = [car1,car2,car3,car4]

    car1.addImage(car1Img);
    car2.addImage(car2Img);
    car3.addImage(car3Img);
    car4.addImage(car4Img);


  }

  play(){
    form.hide();
    Player.getPlayerInfo();

    player.getCarsAtEnd()

    /*
    if(allPlayers !== undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }*/

    if(allPlayers !== undefined){ 
      background(track2);
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index = 0;
      var x = 230;
      var y= displayHeight-250;

      for(var plr in allPlayers){
        index  = index+1;
        x = x+220;
        y = displayHeight- allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index) {
          fill("red");
          stroke(10);
          circle(x,y,60)
          camera.position.x = displayWidth/2
          camera.position.y = y;
        }
        
      }

    
    }

    if(keyIsDown(UP_ARROW) && player.index !== null ){
      player.distance += 10
      player.update();
    }

    if(player.distance > 4230) {
      gameState = 2
      player.rank+= 1
      Player.updateCarsAtEnd(player.rank)
      //alert("Awesome!\n" + "Your Rank is : " + player.rank);

      swal({
        title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
        text: "You reached the finish line!",
        imageUrl: "images/cup.png",
        imageSize: "100x100",
        confirmButtonText: "Ok",
      });

    }

    drawSprites();

  }

  end(){
    //console.log("Game End");
    //console.log("Player Rank : "+player.rank);
  }

}
