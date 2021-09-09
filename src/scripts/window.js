class Window{
  constructor(){
    this.window = new Image();
    this.window.src = './src/imgs/window.png';
  }

  drawWindow(){
    c.drawImage(this.window, 100, -30);
  }
}

export default Window;