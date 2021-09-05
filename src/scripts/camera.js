import {PerspectiveCamera} from 'three';

class SceneCamera{
  constructor(){
    this.camera = new PerspectiveCamera(75, 1200 / 700, 0.1, 1000);
    this.camera.position.z = 5;
  }
}

export default SceneCamera;