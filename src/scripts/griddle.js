class Griddle {
  constructor(){
    
  }
  
  drawGriddle(){
    this.drawGriddleBottom();
    this.drawGriddleTop();
    this.drawGriddlePlate();
    this.drawGriddleSections();
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
}

export default Griddle;