import {DirectionalLight, AmbientLight} from 'three';

class Light{
  constructor(){
    this.sun = new DirectionalLight(0xffffff, 0.5);
    this.ambient = new AmbientLight(0xffffff, 0.6);
  }
}

export default Light;