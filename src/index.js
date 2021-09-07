import Game from './scripts/game.js';

document.addEventListener('DOMContentLoaded', event => {
  const canvas = document.getElementById('view');
  const c = canvas.getContext('2d');  
  window.canvas = canvas;
  window.c = c;
  c.lineWidth = 3;
  
  let canvasOffset = canvas.getBoundingClientRect();
  let game = new Game();

  canvas.addEventListener('mousedown', event =>{
    let clickX = event.clientX - canvasOffset.x;
    let clickY = event.clientY - canvasOffset.y 
    if ((clickX > 290 && clickX < 560) && (clickY < 700 && clickY > 600)){
      console.log("dragging just became true");
      game.dragging = true;
    };
  });

  canvas.addEventListener('mousemove', event => {
    if (game.dragging){
      c.clearRect(0, 0, canvas.width, canvas.height);
      game.drawAll();
      let mouseX = event.clientX - canvasOffset.x;
      let mouseY = event.clientY - canvasOffset.y;
       
      if(!game.patty1.cooking){
        game.patty1.drawPatty(mouseX, mouseY);
      } else if (!game.patty2.cooking){
        game.patty2.drawPatty(mouseX, mouseY);
      } else if (!game.patty3.cooking){
        game.patty3.drawPatty(mouseX, mouseY);
      } else {
        alert("No more space on griddle to add patties!");
      }
    }
  });

  canvas.addEventListener('mouseup', (event) => {
    let mouseX = event.clientX - canvasOffset.x;
    let mouseY = event.clientY - canvasOffset.y;
    if (game.dragging){
      if (game.griddle.whichSection(mouseX, mouseY) === ""){
        c.clearRect(0, 0, canvas.width, canvas.height);
        game.drawAll();
      } else if(!game.patty1.cooking){
        game.patty1.assignSection(game.griddle.whichSection(mouseX, mouseY));
        console.log(game.patty1);
        game.patty1.cook();
      } else if (!game.patty2.cooking){
        game.patty2.assignSection(game.griddle.whichSection(mouseX, mouseY));
        console.log(game.patty2);
      } else if (!game.patty3.cooking){
        game.patty3.assignSection(game.griddle.whichSection(mouseX, mouseY));
        console.log(game.patty3);
      }
      game.dragging = false;
      game.drawAll();
    }
  });
});
