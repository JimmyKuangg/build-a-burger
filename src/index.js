import Griddle from './scripts/griddle.js'
import Condiments from './scripts/condiments.js';
import Patty from './scripts/patty.js';

document.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('view');
  const c = canvas.getContext('2d');  
  window.c = c;
  c.lineWidth = 3;
  
  function drawAll(){
    let griddle = new Griddle();  
    let condiments = new Condiments();
  }

  drawAll();

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
          drawAll();
          let clickX = event.clientX - canvasOffset.x;
          let clickY = event.clientY - canvasOffset.y;
          let patty = new Patty(clickX, clickY);
        }
      });

      canvas.addEventListener('mouseup', (event) => {
        let clickX = event.clientX - canvasOffset.x;
        let clickY = event.clientY - canvasOffset.y;
        dragging = false;
      });
    }
  })
});

