import Griddle from './griddle.js'
import Condiments from './condiments.js';
import Patty from './patty.js';
import Burger from './burger.js';

class Game{
  constructor(){
    //Background elements
    this.griddle = new Griddle();  
    this.condiments = new Condiments();
    //Interactive elements
    //Patties
    this.patty1 = new Patty();
    this.patty2 = new Patty();
    this.patty3 = new Patty();
    this.patties = [new Patty(), new Patty(), new Patty()];
    //Burgers
    this.burger1 = new Burger();
    this.burger2 = new Burger();
    this.burger3 = new Burger();
    this.burger1.burgerSection.x = 40;
    this.burger1.burgerSection.y = 500;
    this.burger2.burgerSection.x = 250;
    this.burger2.burgerSection.y = 500;
    this.burger3.burgerSection.x = 460;
    this.burger3.burgerSection.y = 500;
    //Attributes to aid in interactivity
    this.mousePatty = new Patty();
    this.cookedPatty = new Patty();
    this.cookedPatty.patty = this.cookedPatty.cookedPatty;
    this.topBun = new Burger();
    this.draggingRaw = false;
    this.draggingBun = false;
    this.mouse = {x: 0, y: 0};
  }

  drawAll(x, y){
    this.griddle.drawGriddle();
    this.condiments.drawCondimentsTable();
    this.burger1.drawBurgers();
    this.burger2.drawBurgers();
    this.burger3.drawBurgers();
    //Checking patty1 "state"
    if (this.patty1.cooking){
      this.patty1.drawOnGrill();
    } else if (this.patty1.flipping){
      this.patty1.drawFlipping();
    }
    //Checking patty2 "state"
    if (this.patty2.cooking){ 
      this.patty2.drawOnGrill();
    } else if (this.patty2.flipping){
      this.patty2.drawFlipping();
    }
    //Checking patty3 "state"
    if (this.patty3.cooking) {
      this.patty3.drawOnGrill();
    } else if (this.patty3.flipping){
      this.patty3.drawFlipping();
    }
    //If mouse is moving and held down, draw a patty onto the mouse
    if (this.draggingRaw){
      this.mousePatty.x = x;
      this.mousePatty.y = y;
      this.mousePatty.drawPatty();
    }

    if (this.draggingCooked){
      this.cookedPatty.x = x;
      this.cookedPatty.y = y;
      this.cookedPatty.drawPatty();
    }

    if (this.draggingBun){
      this.topBun.drawTopBun(x - 30, y - 30);
    }
  }

  whichSectionGriddle(x, y){
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

  whichSectionBoard(x, y){
    if (!(y >= 485 && y <= 550)) return "";

    if(x >= 20 && x <= 165){
      return "board section 1";
    } else if (x >= 230 && x <= 355){
      return "board section 2";
    } else if (x >= 440 && x <= 565){
      return "board section 3";
    }
  }

  resetPatty1(){
    this.patty1 = new Patty();
  }

  resetPatty2(){
    this.patty2 = new Patty();
  }

  resetPatty3(){
    this.patty3 = new Patty();
  }
}

export default Game;