class Patty{
  constructor(){
    this.cooking = false;
    this.section = "";
  }

  drawPatty(x, y){
    let rawpatty = new Image();
    rawpatty.src = './src/imgs/rawpatty.png';
    c.drawImage(rawpatty, x - 50, y - 35);
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
      setInterval(function(){alert("hello")}, 5000);
    }
  }
}

export default Patty;