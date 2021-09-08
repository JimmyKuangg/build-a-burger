class Patty{
  constructor(){
    //Flags for the multiple stages of a patty
    this.cooking = false;
    this.ready = false;
    this.flipping = false;
    //Coordinates to track where to draw
    this.x = 0;
    this.y = 0;
    this.section = "";
    //Patty image 
    this.patty = new Image();
    this.patty.src = './src/imgs/rawpatty.png';
    //Used in flipping
    this.peaked = false;
    this.flippingPatty = new Image();
    this.flippingPatty.src = './src/imgs/pattyflipping.png';
    this.totalFrames = 12; // 12 for 12 rotations made in the pattyflipping png
    this.flipWidth = 100; // Width of the patty picture to be displayed
    this.flipHeight = 100; // Height of the patty picture to be displayed
    this.sourceImageX = 0; // Variable to tell where to start looking inside the source image
    this.currentFrame = 0; // Frame counter to tell which part of the source image to look at
  }

  drawPatty(){
    c.drawImage(this.patty, this.x - 50, this.y - 35);
  }

  assignSection(section){
    switch(section){
      case "section 1":
        this.section = "section 1";
        break;
      case "section 2":
        this.section = "section 2";
        break;
      case "section 3":
        this.section = "section 3";
    }
    
    this.cooking = true;
  }

  drawOnGrill(){
    if(this.section === "section 1"){
      this.x = 775;
      this.y = 475;
      this.drawPatty();
    } else if(this.section === "section 2"){
      this.x = 950;
      this.y = 475;
      this.drawPatty();
    } else if(this.section === "section 3"){
      this.x = 1125;
      this.y = 475;
      this.drawPatty();
    } else {
      return;
    }
  } 

  cook(){
    if (this.cooking){
      setTimeout(() => {
        this.patty.src = './src/imgs/sandwich.png';
        this.drawOnGrill();
        this.ready = true;
      }, 6000);
    }

  }

  flip(){
    if (this.ready){
      this.ready = false;
      this.cooking = false;
      this.flipping = true;
      this.drawFlipping();
    }
  }

  drawFlipping(){
    if(this.y >= 400){
      this.y -= 2;
    } else {
      this.y += 5;
    }
    this.sourceImageX = (this.currentFrame % this.totalFrames) * this.flipWidth; // Multiply by the width of the image to tell where the drawImage function should start drawing from the source image
    this.currentFrame++; // Increment the currentFrame every animation frame
    c.drawImage(this.flippingPatty, this.sourceImageX, 0, this.flipWidth, this.flipHeight, this.x - 50, this.y - 50, this.flipWidth, this.flipHeight);
  }
}

export default Patty;