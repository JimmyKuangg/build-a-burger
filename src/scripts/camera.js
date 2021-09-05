import {PerspectiveCamera} from 'three';

class SceneCamera{
  constructor(){
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;
  }
}

export default SceneCamera;