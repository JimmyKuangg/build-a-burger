import Griddle from './griddle.js'
import Condiments from './condiments.js';
import Patty from './patty.js';

class Game{
  constructor(){
    this.drawAll();
  }

  drawAll(){
    let griddle = new Griddle();  
    let condiments = new Condiments();
  }

  interaction(){
    canvas.addEventListener('mousedown', (event) =>{
      let canvasOffset = canvas.getBoundingClientRect();
      let clickX = event.clientX - canvasOffset.x;
      let clickY = event.clientY - canvasOffset.y;

      if ((clickX > 290 && clickX < 560) && (clickY < 700 && clickY > 600)){
        let patty = new Patty(clickX, clickY);
        let dragging = true;

        canvas.addEventListener('mousemove', (event) => {
          if (dragging === true){
            c.clearRect(0, 0, canvas.width, canvas.height);
            this.drawAll();
            let mouseX = event.clientX - canvasOffset.x;
            let mouseY = event.clientY - canvasOffset.y;
            let patty = new Patty(mouseX, mouseY).drawPatty();
          }
        });

        canvas.addEventListener('mouseup', (event) => {
          let mouseX = event.clientX - canvasOffset.x;
          let mouseY = event.clientY - canvasOffset.y;
          dragging = false;
          this.drawAll();
        });
      }
    })
  } 
}

export default Game;