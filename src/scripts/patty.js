import { CylinderGeometry, MeshToonMaterial, Mesh, LineBasicMaterial, EdgesGeometry, LineSegments} from "three";

class Patty {
  constructor(){
    //Patty
    const pattyGeo = new CylinderGeometry(2.5, 2.5, 1, 25);
    const pattyMaterial = new MeshToonMaterial({color: 0xD26163});
    this.patty = new Mesh(pattyGeo, pattyMaterial);
    //Patty Outlines
    const lineMaterial = new LineBasicMaterial({color: 0x000000});
    const pattyEdges = new EdgesGeometry(pattyGeo);
    this.pattyOutline = new LineSegments(pattyEdges, lineMaterial);
    //Initial position and Rotations
    this.patty.position.set(-5, 1, 85);
    this.patty.rotateX(0.4);
    this.pattyOutline.position.set(-5, 1, 85);
    this.pattyOutline.rotateX(0.4);
  }
}

export default Patty;