import { WebGLRenderer } from "three";

class Renderer{
  constructor(){
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(1200, 700);
    this.renderer.setPixelRatio(devicePixelRatio);
  }
}

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(1000, 700);
// renderer.setPixelRatio(devicePixelRatio);

export default Renderer;