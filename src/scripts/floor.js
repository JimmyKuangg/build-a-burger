import {Mesh, MeshToonMaterial, PlaneGeometry, EdgesGeometry, LineSegments, LineBasicMaterial, DoubleSide} from 'three';

class Plane {
  constructor(){
    //Floor
    const geo = new PlaneGeometry(200, 100);
    const material = new MeshToonMaterial({color: 0x8CA97D, side: DoubleSide});
    this.floor = new Mesh(geo, material);
    //Floor outline
    const edges = new EdgesGeometry(geo);
    this.line = new LineSegments(edges, new LineBasicMaterial({color : 0xffffff}));
    //Positioning and rotations
    this.floor.rotateX(2);
    this.line.rotateX(2);
    this.floor.position.z = 40;
    this.line.position.z = 40;
  }

  
}

export default Plane;