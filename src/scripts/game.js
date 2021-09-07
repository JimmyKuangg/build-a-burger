import Griddle from './griddle.js'
import Condiments from './condiments.js';
import Patty from './patty.js';

class Game{
  constructor(){
    this.griddle = new Griddle();  
    this.condiments = new Condiments();
    this.patty1 = new Patty();
    this.patty2 = new Patty();
    this.patty3 = new Patty();
    this.mousePatty = new Patty();
    this.dragging = false;
    this.mouse = {x: 0, y: 0};
  }

  drawAll(x, y){
    this.griddle.drawGriddle();
    this.condiments.drawCondimentsTable();
    if (this.patty1.cooking) this.patty1.drawOnGrill();
    if (this.patty2.cooking) this.patty2.drawOnGrill();
    if (this.patty3.cooking) this.patty3.drawOnGrill();
    if (this.dragging) this.mousePatty.drawPatty(x, y);
  }

}

export default Game;