import { WebGLRenderer } from "three";

class Renderer{
  constructor(){
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
  }
}

export default Renderer;