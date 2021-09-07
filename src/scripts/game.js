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
    this.drawAll();
  }

  drawAll(){
    this.griddle.drawGriddle();
    this.condiments.drawCondimentsTable();
    if(this.patty1.cooking) this.patty1.drawOnGrill();
    if (this.patty2.cooking) this.patty2.drawOnGrill();
    if (this.patty3.cooking) this.patty3.drawOnGrill();
  }

  interaction(){
    canvas.addEventListener('mousedown', (event) =>{
      let canvasOffset = canvas.getBoundingClientRect();
      let clickX = event.clientX - canvasOffset.x;
      let clickY = event.clientY - canvasOffset.y;

      if ((clickX > 290 && clickX < 560) && (clickY < 700 && clickY > 600)){
        let dragging = true;

        canvas.addEventListener('mousemove', (event) => {
          if (dragging === true){
            c.clearRect(0, 0, canvas.width, canvas.height);
            this.drawAll();
            let mouseX = event.clientX - canvasOffset.x;
            let mouseY = event.clientY - canvasOffset.y;
            if(!this.patty1.cooking){
              this.patty1.drawPatty(mouseX, mouseY);
            } else if (!this.patty2.cooking){
              this.patty2.drawPatty(mouseX, mouseY);
            } else if (!this.patty3.cooking){
              this.patty3.drawPatty(mouseX, mouseY);
            } else {
              alert("No more space on griddle to add patties!");
            }
          }
        });
        
        canvas.addEventListener('mouseup', (event) => {
          let mouseX = event.clientX - canvasOffset.x;
          let mouseY = event.clientY - canvasOffset.y;
          //debugger
          if(!this.patty1.cooking){
            this.patty1.assignSection(this.griddle.whichSection(mouseX, mouseY));
            console.log("THIS IS PATTY1");
            console.log(this.patty1);
          } else if (!this.patty2.cooking){
            this.patty2.assignSection(this.griddle.whichSection(mouseX, mouseY));
            console.log("THIS IS PATTY2"); 
            console.log(this.patty2);
          } else if (!this.patty3.cooking){
            this.patty3.assignSection(this.griddle.whichSection(mouseX, mouseY));
            console.log("THIS IS PATTY3");
            console.log(this.patty3);
          }
          dragging = false;
          this.drawAll();
        });
      }
    })
  } 
}

export default Game;