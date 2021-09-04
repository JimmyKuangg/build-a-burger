import {Scene, Color} from 'three';

class MainScene {
  constructor() {
    this.scene = new Scene();
    this.scene.background = new Color(0xfffff);
  }

  add(object) {
    this.scene.add(object);
  }
}

export default MainScene;