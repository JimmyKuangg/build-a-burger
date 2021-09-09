class Burger{
  constructor(){
    this.burger = new Image();
    this.burger.src = './src/imgs/bottombun.png';
    this.burgerSection = {x: 0, y: 0};
    this.topBun = new Image();
    this.topBun.src = './src/imgs/topbun.png';
  }

  drawBurgers(){
    c.drawImage(this.burger, this.burgerSection.x, this.burgerSection.y);
  }

  addPatty(){
    this.burger.src = './src/imgs/bottombunandpatty.png';
    this.burgerSection.y = 475;
  }

  addBun(){
    this.burger.src = './src/imgs/fullburger.png';
  }

  drawTopBun(x, y){
    c.drawImage(this.topBun, x - 25, y);
  }
}

export default Burger;