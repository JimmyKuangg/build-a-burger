class Burger{
  constructor(){
    this.burger = new Image();
    this.burger.src = './src/imgs/bottombun.png';
    this.topBun = new Image();
    this.topBun.src = './src/imgs/topbun.png';
    this.completeBurger = new Image();
    this.completeBurger.src = './src/imgs/fullburger.png';
    this.hasPatty = false;
    this.complete = false;
    this.burgerSection = {x: 0, y: 0};
  }

  drawBurgers(){
    c.drawImage(this.burger, this.burgerSection.x, this.burgerSection.y);
  }

  addPatty(){
    this.burger.src = './src/imgs/bottombunandpatty.png';
    this.burgerSection.y = 475;
    this.hasPatty = true;
  }

  addBun(){
    this.burger.src = './src/imgs/fullburger.png';
    this.burgerSection.y = 450;
    this.complete = true;
  }

  drawTopBun(x, y){
    c.drawImage(this.topBun, x - 25, y);
  }

  drawHamburger(x, y){
    c.drawImage(this.completeBurger, x - 50, y - 50);
  }
}

export default Burger;