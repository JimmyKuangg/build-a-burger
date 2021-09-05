import {Mesh, MeshToonMaterial, PlaneGeometry, DoubleSide} from 'three';

class Plane {
  constructor(){
    const geo = new PlaneGeometry(7, 7);
    const material = new MeshToonMaterial({color: 0x8CA97D, side: DoubleSide});
    this.floor = new Mesh(geo, material);

    this.floor.rotateX(2);
  }
}

export default Plane;