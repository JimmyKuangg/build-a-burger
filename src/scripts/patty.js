class Patty{
  constructor(x, y){
    this.x = x - 50;
    this.y = y - 35;
  }

  drawPatty(){
    let rawpatty = new Image();
    rawpatty.src = './src/imgs/rawpatty.png';
    c.drawImage(rawpatty, this.x, this.y);
  }
}

export default Patty;