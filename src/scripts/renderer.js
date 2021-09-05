import { WebGLRenderer } from "three";

class Renderer{
  constructor(){
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(1200, 700);
    this.renderer.shadowMap.enabled = true;
  }
}

export default Renderer;