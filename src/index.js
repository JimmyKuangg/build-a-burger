import Game from './scripts/game.js';

document.addEventListener('DOMContentLoaded', event => {
  const canvas = document.getElementById('view');
  const c = canvas.getContext('2d');  
  window.canvas = canvas;
  window.c = c;
  c.lineWidth = 3;
  c.font = '20px serif';
  
  let canvasOffset = canvas.getBoundingClientRect();
  let game = new Game();

  //Mouse interactivity with objects
  function mousePressed(event){
    game.mouse.x = event.clientX - canvasOffset.x;
    game.mouse.y = event.clientY - canvasOffset.y 
    //Clicking on the patty door
    if ((game.mouse.x > 290 && game.mouse.x < 560) && (game.mouse.y < 700 && game.mouse.y > 600)){
      game.dragging = true;
    };

    //While clicking on the griddle
    if((game.whichSection(game.mouse.x, game.mouse.y) === "section 1")){
      if(game.patty1.section === "section 1"){
        game.patty1.flip();
      } else if (game.patty2.section === "section 1"){
        game.patty2.flip();
      } else if (game.patty3.section === "section 1"){
        game.patty3.flip();
      }
    } else if((game.whichSection(game.mouse.x, game.mouse.y) === "section 2")){
      if(game.patty1.section === "section 2"){
        game.patty1.flip();
      } else if (game.patty2.section === "section 2"){
        game.patty2.flip();
      } else if (game.patty3.section === "section 2"){
        game.patty3.flip();
      }
    } else if((game.whichSection(game.mouse.x, game.mouse.y) === "section 3")){
      if(game.patty1.section === "section 3"){
        game.patty1.flip();
      } else if (game.patty2.section === "section 3"){
        game.patty2.flip();
      } else if (game.patty3.section === "section 3"){
        game.patty3.flip();
      }
    }
  };

  function mouseMoving(event){
    if (game.dragging){
      game.mouse.x = event.clientX - canvasOffset.x;
      game.mouse.y = event.clientY - canvasOffset.y;
    }
  };

  function mouseReleased(event){
    game.mouse.x = event.clientX - canvasOffset.x;
    game.mouse.y = event.clientY - canvasOffset.y;
    //On release of mouse button, assign a patty to a section, or clear canvas and redraw
    if (game.dragging){
      if (game.whichSection(game.mouse.x, game.mouse.y) === ""){
        c.clearRect(0, 0, canvas.width, canvas.height);
        game.drawAll();
      } else if(!game.patty1.cooking && !game.patty1.flipping){
        game.patty1.assignSection(game.whichSection(game.mouse.x, game.mouse.y));
        game.patty1.cook();
      } else if (!game.patty2.cooking && !game.patty2.flipping){
        game.patty2.assignSection(game.whichSection(game.mouse.x, game.mouse.y));
        game.patty2.cook();
      } else if (!game.patty3.cooking && !game.patty3.flipping){
        game.patty3.assignSection(game.whichSection(game.mouse.x, game.mouse.y));
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
});
