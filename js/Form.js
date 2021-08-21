class Form {

  constructor() {
    this.inputTitle = createElement('h4');
    this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset  = createButton("RESET");
  }
  hide(){
    this.title.hide()
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    background(bgImg);
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-100, 40);
    this.inputTitle.html("NAME");
    this.inputTitle.position(displayWidth/2-30, displayHeight/4-50);
    this.input.position(displayWidth/2-90, displayHeight/4);
    this.button.position(displayWidth/2-30, displayHeight/4+50);

    this.reset.position(displayWidth-100,20)

    this.button.mousePressed(()=>{
      this.inputTitle.hide();
      this.input.hide();
      this.button.hide();
      playerCount+=1;
      var name = this.input.value()
      name = name.replace(/  +/g, ' ');  //replace multiple spaces with /g flag
      if(name !== "" && name !== ' ') {
        player.name = name; }
      else {
        player.name = "Player"+playerCount;  } 
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0)
    })

  }
}
