class Patty{
  constructor(){
    this.cooking = false;
    this.section = "";
    this.patty = new Image();
    this.patty.src = './src/imgs/rawpatty.png';
  }

  drawPatty(x, y){
    c.drawImage(this.patty, x - 50, y - 35);
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
      this.drawPatty(775, 475);
    } else if(this.section === "section 2"){
      this.drawPatty(950, 475);
    } else if(this.section === "section 3"){
      this.drawPatty(1125, 475);
    } else {
      return;
    }
  } 

  cook(){
    if (this.cooking){
      let that = this;
      setTimeout(function(){
        that.patty.src = './src/imgs/sandwich.png';
        that.drawOnGrill();
      }, 5000);
    }
  }
}

export default Patty;