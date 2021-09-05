import {TorusGeometry, MeshToonMaterial, Mesh} from 'three';

class Donut {
  constructor() {
    const geo = new TorusGeometry(1, .5, 26, 26);
    const material = new MeshToonMaterial({color: 0xbd9542});
    this.donut = new Mesh(geo, material);

    this.donut.position.z = 1;
    this.donut.position.x = -5;
  }

  //Rotate method for animating
  rotate(){ 
    this.donut.rotation.x += 0.01;
    this.donut.rotation.y += 0.01;
  }
}

export default Donut;