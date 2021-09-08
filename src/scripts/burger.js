class Burger{
  constructor(){
    this.bottombun = new Image();
    this.bottombun.src = './src/imgs/bottombun.png';
    this.burgerSection = {x: 0, y: 0};

  }

  drawBurgers(){
    c.drawImage(this.bottombun, this.burgerSection.x, this.burgerSection.y);
  }
}

export default Burger;