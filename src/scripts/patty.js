class Patty{
  constructor(x, y){
    this.x = x - 15;
    this.y = y - 15;
    this.drawPatty();
  }

  drawPatty(){
    c.rect(this.x, this.y, 30, 30);
    c.stroke();
  }
}

export default Patty;