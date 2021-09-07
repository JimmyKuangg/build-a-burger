import Game from './scripts/game.js';

document.addEventListener('DOMContentLoaded', event => {
  const canvas = document.getElementById('view');
  const c = canvas.getContext('2d');  
  window.canvas = canvas;
  window.c = c;
  c.lineWidth = 3;
  
  let canvasOffset = canvas.getBoundingClientRect();
  let game = new Game();

  function mousePressed(event){
    game.mouse.x = event.clientX - canvasOffset.x;
    game.mouse.y = event.clientY - canvasOffset.y 
    console.log('mouse was clicked');
    if ((game.mouse.x > 290 && game.mouse.x < 560) && (game.mouse.y < 700 && game.mouse.y > 600)){
      game.dragging = true;
    };
  };

  function mouseMoving(event){
    if (game.dragging){
      console.log('mouse is moving');
      game.mouse.x = event.clientX - canvasOffset.x;
      game.mouse.y = event.clientY - canvasOffset.y;
    }
  };

  function mouseReleased(event){
    game.mouse.x = event.clientX - canvasOffset.x;
    game.mouse.y = event.clientY - canvasOffset.y;
    if (game.dragging){
      if (game.griddle.whichSection(game.mouse.x, game.mouse.y) === ""){
        c.clearRect(0, 0, canvas.width, canvas.height);
        game.drawAll();
      } else if(!game.patty1.cooking){
        game.patty1.assignSection(game.griddle.whichSection(game.mouse.x, game.mouse.y));
        game.patty1.cook();
      } else if (!game.patty2.cooking){
        game.patty2.assignSection(game.griddle.whichSection(game.mouse.x, game.mouse.y));
        game.patty2.cook();
      } else if (!game.patty3.cooking){
        game.patty3.assignSection(game.griddle.whichSection(game.mouse.x, game.mouse.y));
        game.patty3.cook();
      }
      game.dragging = false;
      game.drawAll();
    }
  };
  
  function start(){
    requestAnimationFrame(start);
    c.clearRect(0, 0, innerWidth, innerHeight);
    canvas.addEventListener('mousedown', mousePressed, false);
    canvas.addEventListener('mousemove', mouseMoving, false);
    canvas.addEventListener('mouseup', mouseReleased, false);
    game.drawAll(game.mouse.x, game.mouse.y);
  }

  start();
  // game.drawAll();
});
