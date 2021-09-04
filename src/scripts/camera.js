import {PerspectiveCamera} from 'three';

class Camera {
  constructor(){
    this.camera = new PerspectiveCamera(90, 1200 / 700, 0.1, 1000);
    this.camera.position.z = 100;
  }
}


export default Camera;

