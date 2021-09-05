import { WebGLRenderer } from "three";

class Renderer{
  constructor(){
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.shadowMap.enabled = true;
  }
}

export default Renderer;