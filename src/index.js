import Game from './scripts/game.js';

document.addEventListener('DOMContentLoaded', event => {
  const canvas = document.getElementById('view');
  const c = canvas.getContext('2d');  
  window.canvas = canvas;
  window.c = c;
  c.lineWidth = 3;

  let canvasOffset = canvas.getBoundingClientRect();
  let clickedAt = {x: 0, y: 0};
  let game = new Game();

  //Mouse interactivity with objects
  function mousePressed(event){
    game.mouse.x = event.clientX - canvasOffset.x;
    game.mouse.y = event.clientY - canvasOffset.y;
    clickedAt.x = event.clientX - canvasOffset.x;
    clickedAt.y = event.clientY - canvasOffset.y;
    
    //Clicking on the patty door
    if ((game.mouse.x > 290 && game.mouse.x < 560) && (game.mouse.y < 700 && game.mouse.y > 600)){
      game.draggingRaw = true;
    };
    //Clicking on the bun door
    if ((game.mouse.x > 20 && game.mouse.x < 270) && (game.mouse.y < 700 && game.mouse.y > 600)){
      game.draggingBun = true;
    }
    //Clicking on completed hamburgers
    if (game.whichSectionBoard(clickedAt.x, clickedAt.y) === 'board section 1' && game.burger1.complete){
      game.draggingHamburger = true;
    } else if (game.whichSectionBoard(clickedAt.x, clickedAt.y) === 'board section 2' && game.burger2.complete){
      game.draggingHamburger = true;
    } else if (game.whichSectionBoard(clickedAt.x, clickedAt.y) === 'board section 3' && game.burger3.complete){
      game.draggingHamburger = true;
    };

    //While clicking on the griddle
    if((game.whichSectionGriddle(game.mouse.x, game.mouse.y) === "section 1")){
      if(game.patty1.griddleSection === "section 1"){
        (game.patty1.ready) ? game.patty1.flip() : game.draggingCooked = true;
      } else if (game.patty2.griddleSection === "section 1") {
        (game.patty2.ready) ? game.patty2.flip() : game.draggingCooked = true;
      } else if (game.patty3.griddleSection === "section 1"){
        (game.patty3.ready) ? game.patty3.flip() : game.draggingCooked = true;
      }
    } else if((game.whichSectionGriddle(game.mouse.x, game.mouse.y) === "section 2")){
      if(game.patty1.griddleSection === "section 2"){
        (game.patty1.ready) ? game.patty1.flip() : game.draggingCooked = true;
      } else if (game.patty2.griddleSection === "section 2") {
        (game.patty2.ready) ? game.patty2.flip() : game.draggingCooked = true;
      } else if (game.patty3.griddleSection === "section 2"){
        (game.patty3.ready) ? game.patty3.flip() : game.draggingCooked = true;
      }
    } else if((game.whichSectionGriddle(game.mouse.x, game.mouse.y) === "section 3")){
      if(game.patty1.griddleSection === "section 3"){
        (game.patty1.ready) ? game.patty1.flip() : game.draggingCooked = true;
      } else if (game.patty2.griddleSection === "section 3") {
        (game.patty2.ready) ? game.patty2.flip() : game.draggingCooked = true;
      } else if (game.patty3.griddleSection === "section 3"){
        (game.patty3.ready) ? game.patty3.flip() : game.draggingCooked = true;
      }
    }
  };

  function mouseMoving(event){
    if (game.draggingRaw || game.draggingCooked || game.draggingBun || game.draggingHamburger){
      game.mouse.x = event.clientX - canvasOffset.x;
      game.mouse.y = event.clientY - canvasOffset.y;
    }
  };

  function mouseReleased(event){
    game.mouse.x = event.clientX - canvasOffset.x;
    game.mouse.y = event.clientY - canvasOffset.y;
    //On release of mouse button, assign a patty to a section, or clear canvas and redraw
    if (game.draggingRaw){
      if (game.whichSectionGriddle(game.mouse.x, game.mouse.y) === ""){
        c.clearRect(0, 0, canvas.width, canvas.height);
        game.drawAll();
      } else if(!game.patty1.cooking && !game.patty1.flipping){
        game.patty1.assignSection(game.whichSectionGriddle(game.mouse.x, game.mouse.y));
        game.patty1.cook();
      } else if (!game.patty2.cooking && !game.patty2.flipping){
        game.patty2.assignSection(game.whichSectionGriddle(game.mouse.x, game.mouse.y));
        game.patty2.cook();
      } else if (!game.patty3.cooking && !game.patty3.flipping){
        game.patty3.assignSection(game.whichSectionGriddle(game.mouse.x, game.mouse.y));
        game.patty3.cook();
      }

      game.draggingRaw = false;
    }

    // On release of mouse button on top of buns with patty on mouse
    if (game.draggingCooked){
      //Check board section 1
      if(game.whichSectionBoard(game.mouse.x, game.mouse.y) === "board section 1"){
        if(clickedAt.x >= 725 && clickedAt.x <= 825){
          //Check which patty is the one that is placed on griddle section 1
          if(game.patty1.griddleSection === "section 1"){
            if(game.patty1.cooked){
              game.burger1.addPatty();
              game.resetPatty1();
            }
          } else if (game.patty2.griddleSection === "section 1") {
            if(game.patty2.cooked){
              game.burger1.addPatty();
              game.resetPatty2();
            }
          } else if (game.patty3.griddleSection === "section 1"){
            if(game.patty3.cooked){
              game.burger1.addPatty();
              game.resetPatty3();
            }
          }
        } else if(clickedAt.x >= 915 && clickedAt.x <= 1000){
          if(game.patty1.griddleSection === "section 2"){
            if(game.patty1.cooked){
              game.burger1.addPatty();
              game.resetPatty1();
            }
          } else if (game.patty2.griddleSection === "section 2") {
            if(game.patty2.cooked){
              game.burger1.addPatty();
              game.resetPatty2();
            }
          } else if (game.patty3.griddleSection === "section 2"){
            if(game.patty3.cooked){
              game.burger1.addPatty();
              game.resetPatty3();
            }
          }
        } else if(clickedAt.x >= 1090 && clickedAt.x <= 1200){
          if(game.patty1.griddleSection === "section 3"){
            if(game.patty1.cooked){
              game.burger1.addPatty();
              game.resetPatty1();
            }
          } else if (game.patty2.griddleSection === "section 3") {
            if(game.patty2.cooked){
              game.burger1.addPatty();
              game.resetPatty2();
            }
          } else if (game.patty3.griddleSection === "section 3"){
            if(game.patty3.cooked){
              game.burger1.addPatty();
              game.resetPatty3();
            }
          }
        }
      } else if(game.whichSectionBoard(game.mouse.x, game.mouse.y) === "board section 2"){
        if(clickedAt.x >= 725 && clickedAt.x <= 825){
          //Check which patty is the one that is placed on griddle section 1
          if(game.patty1.griddleSection === "section 1"){
            if(game.patty1.cooked){
              game.burger2.addPatty();
              game.resetPatty1();
            }
          } else if (game.patty2.griddleSection === "section 1") {
            if(game.patty2.cooked){
              game.burger2.addPatty();
              game.resetPatty2();
            }
          } else if (game.patty3.griddleSection === "section 1"){
            if(game.patty3.cooked){
              game.burger2.addPatty();
              game.resetPatty3();
            }
          }
        } else if(clickedAt.x >= 915 && clickedAt.x <= 1000){
          if(game.patty1.griddleSection === "section 2"){
            if(game.patty1.cooked){
              console.log("patty 1 reset");
              game.burger2.addPatty();
              game.resetPatty1();
            }
          } else if (game.patty2.griddleSection === "section 2") {
            if(game.patty2.cooked){
              console.log("patty 2 reset");
              game.burger2.addPatty();
              game.resetPatty2();
            }
          } else if (game.patty3.griddleSection === "section 2"){
            if(game.patty3.cooked){
              console.log("patty 3 reset");
              game.burger2.addPatty();
              game.resetPatty3();
            }
          }
        } else if(clickedAt.x >= 1090 && clickedAt.x <= 1200){
          if(game.patty1.griddleSection === "section 3"){
            if(game.patty1.cooked){
              console.log("patty 1 reset");
              game.burger2.addPatty();
              game.resetPatty1();
            }
          } else if (game.patty2.griddleSection === "section 3") {
            if(game.patty2.cooked){
              console.log("patty 2 reset");
              game.burger2.addPatty();
              game.resetPatty2();
            }
          } else if (game.patty3.griddleSection === "section 3"){
            if(game.patty3.cooked){
              console.log("patty 3 reset");
              game.burger2.addPatty();
              game.resetPatty3();
            }
          }
        }
      } else if(game.whichSectionBoard(game.mouse.x, game.mouse.y) === "board section 3"){
        if(clickedAt.x >= 725 && clickedAt.x <= 825){
          //Check which patty is the one that is placed on griddle section 1
          if(game.patty1.griddleSection === "section 1"){
            if(game.patty1.cooked){
              console.log("patty 1 reset");
              game.burger3.addPatty();
              game.resetPatty1();
            }
          } else if (game.patty2.griddleSection === "section 1") {
            if(game.patty2.cooked){
              console.log("patty 2 reset");
              game.burger3.addPatty();
              game.resetPatty2();
            }
          } else if (game.patty3.griddleSection === "section 1"){
            if(game.patty3.cooked){
              console.log("patty 3 reset");
              game.burger3.addPatty();
              game.resetPatty3();
            }
          }
        } else if(clickedAt.x >= 915 && clickedAt.x <= 1000){
          if(game.patty1.griddleSection === "section 2"){
            if(game.patty1.cooked){
              console.log("patty 1 reset");
              game.burger3.addPatty();
              game.resetPatty1();
            }
          } else if (game.patty2.griddleSection === "section 2") {
            if(game.patty2.cooked){
              console.log("patty 2 reset");
              game.burger3.addPatty();
              game.resetPatty2();
            }
          } else if (game.patty3.griddleSection === "section 2"){
            if(game.patty3.cooked){
              console.log("patty 3 reset");
              game.burger3.addPatty();
              game.resetPatty3();
            }
          }
        } else if(clickedAt.x >= 1090 && clickedAt.x <= 1200){
          if(game.patty1.griddleSection === "section 3"){
            if(game.patty1.cooked){
              console.log("patty 1 reset");
              game.burger3.addPatty();
              game.resetPatty1();
            }
          } else if (game.patty2.griddleSection === "section 3") {
            if(game.patty2.cooked){
              console.log("patty 2 reset");
              game.burger3.addPatty();
              game.resetPatty2();
            }
          } else if (game.patty3.griddleSection === "section 3"){
            if(game.patty3.cooked){
              console.log("patty 3 reset");
              game.burger3.addPatty();
              game.resetPatty3();
            }
          }
        }
      }

      game.draggingCooked = false;
    }

    //On release of mouse on top of buns with top bun on mouse
    if(game.draggingBun){
      if (game.whichSectionBoard(game.mouse.x, game.mouse.y) === "board section 1" && game.burger1.hasPatty){
        game.burger1.addBun();
      } else if (game.whichSectionBoard(game.mouse.x, game.mouse.y) === "board section 2" && game.burger2.hasPatty){
        game.burger2.addBun();
      } else if (game.whichSectionBoard(game.mouse.x, game.mouse.y) === "board section 3" && game.burger3.hasPatty){
        game.burger3.addBun();
      }
      game.draggingBun = false;
    }

    //On release of mouse on top of window with hamburger on mouse
    if(game.draggingHamburger){
      console.log(game);
      if((game.inWindow(game.mouse.x, game.mouse.y) && game.score(game.whichSectionBoard(clickedAt.x, clickedAt.y)))){
        alert(game.points);
      }
      game.draggingHamburger = false;
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
