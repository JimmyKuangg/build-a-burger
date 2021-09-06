import Game from './scripts/game.js';

document.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('view');
  const c = canvas.getContext('2d');  
  window.canvas = canvas;
  window.c = c;
  c.lineWidth = 3;
  
  let game = new Game();
  game.interaction();
  
});

