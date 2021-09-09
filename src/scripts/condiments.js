class Condiments {
  constructor(){
    
  }

  drawCondimentsTable(){
    this.drawCondimentsBottom();
    this.drawCondimentsBoard();
    this.drawCondimentsDoors();
  }
  
  drawCondimentsBottom(){
    c.rect(0, 575, 600, 125);
    c.fillStyle = '#61666a'
    c.fill();
    c.stroke();

    //Fill space between griddle and table
    c.beginPath();
    c.moveTo(600, 700);
    c.lineTo(600, 605);
    c.lineTo(625, 605);
    c.lineTo(625, 700);
    c.lineTo(600, 700);
    c.fillStyle = '#3b3d40';
    c.fill();
    c.stroke();
    
    //Get back of table
    c.beginPath();
    c.moveTo(0, 475);
    c.lineTo(75, 400);
    c.lineTo(725, 400);
    c.lineTo(600, 575);
    c.lineTo(0, 575);
    c.lineTo(0, 475);

    c.fillStyle = '#61666a';
    c.fill();
    c.stroke();
  }

  drawCondimentsBoard(){
    c.beginPath();
    c.rect(0, 557, 600, 15);
    c.fillStyle = '#f4be2a'
    c.fill();
    c.stroke();

    c.moveTo(600, 570);
    c.lineTo(650, 500);
    c.lineTo(650, 485);
    c.lineTo(0, 485);
    c.lineTo(0, 555);
    c.moveTo(600, 555);
    c.lineTo(650, 485);
    c.fillStyle = '#f4be2a'
    c.fill();
    c.stroke();
  }

  drawCondimentsDoors(){
    //Right door
    c.beginPath();
    c.moveTo(560, 700);
    c.lineTo(560, 600);
    c.lineTo(550, 610);
    c.lineTo(550, 700);
    c.moveTo(290, 700);
    c.lineTo(290, 610);
    c.lineTo(550, 610);
    c.lineTo(550, 700);
    c.moveTo(290, 610);
    c.lineTo(300, 600);
    c.lineTo(560, 600);
    c.lineTo(550, 610);
    
    //Left door
    c.moveTo(270, 600);
    c.lineTo(260, 610);
    c.lineTo(260, 700);
    c.lineTo(270, 700);
    c.lineTo(270, 600);
    c.lineTo(30, 600);
    c.lineTo(20, 610);
    c.lineTo(260, 610);
    c.moveTo(20, 610);
    c.lineTo(20, 700);
    c.lineTo(260, 700);
    c.lineTo(260, 610);
    
    c.fillStyle = '#aab7c7';
    c.fill();
    c.stroke();
  }
}

export default Condiments;