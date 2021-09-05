import {PerspectiveCamera} from 'three';

class SceneCamera{
  constructor(){
    this.camera = new PerspectiveCamera();
    this.camera.position.z = 5;
  }
}

export default SceneCamera;