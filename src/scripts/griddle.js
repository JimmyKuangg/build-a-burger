class Griddle {
  constructor(){
    this.section1Occupied = false;
    this.section2Occupied = false;
    this.section3Occupied = false;
  }
  
  drawGriddle(){
    this.drawGriddleBottom();
    this.drawGriddleTop();
    this.drawGriddlePlate();
    this.drawGriddleSections();
   // this.coordTester();
  }

  drawGriddleBottom(){
    c.rect(600, 575, 610, 30);
    c.rect(625, 605, 610, 100);
    c.fillStyle = '#d7d7cb'
    c.fill();
    c.stroke();
  }
  drawGriddleTop(){
    c.beginPath();
    c.moveTo(600, 575);
    c.lineTo(725, 400);
    c.lineTo(1200, 400);
    c.lineTo(1200, 625);
    c.lineTo(1200, 575);
    c.fillStyle = '#d7d7cb'
    c.fill();
    c.stroke();
  }

  drawGriddleSections(){
    c.beginPath();
    c.moveTo(825, 530);
    c.lineTo(915, 400);
    c.moveTo(1000, 530);
    c.lineTo(1090, 400);
    //c.lineTo(1,1);
    c.stroke(); 
  }

  
  drawGriddlePlate(){
    c.beginPath();
    c.moveTo(633, 530);
    c.lineTo(725, 400);
    c.lineTo(1200, 400);
    c.lineTo(1200, 530);
    c.lineTo(633, 530);
    c.fillStyle = '#52514a'
    c.fill();
    c.stroke();
  }
  
  coordTester(){
    c.beginPath();
    c.moveTo(1090, 400);
    c.lineTo(1, 1);
    c.stroke();
  }

  whichSection(x, y){
    if(!(y >= 400 && y <= 530)){
      return "";
    }

    if(x >= 725 && x <= 825){
      return "section 1";
    } else if(x >= 915 && x <= 1000){
      return "section 2";
    } else if(x >= 1090 && x <= 1200){
      return "section 3";
    } else {
      return "";
    }
  }
}

export default Griddle;