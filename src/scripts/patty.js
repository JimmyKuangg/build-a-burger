import { CylinderGeometry, MeshToonMaterial, Mesh, LineBasicMaterial, EdgesGeometry, LineSegments} from "three";

class Patty {
  constructor(){
    //Patty
    const pattyGeo = new CylinderGeometry(2.5, 2.5, 0.6, 25);
    const pattyMaterial = new MeshToonMaterial({color: 0xD26163});
    this.patty = new Mesh(pattyGeo, pattyMaterial);
    //Patty Outlines
    const lineMaterial = new LineBasicMaterial({color: 0xff0063});
    const pattyEdges = new EdgesGeometry(pattyGeo);
    this.pattyOutline = new LineSegments(pattyEdges, lineMaterial);
    //Initial position and Rotations
    
    this.patty.position.set(-5, 1.5, 85);
    this.patty.rotateX(0.45);
    this.pattyOutline.position.set(-5, 1.5, 85);
    this.pattyOutline.rotateX(0.45);

    //For interactivity
    this.patty.userData.draggable = true;
  }

  flip() {
    this.patty.rotation.x += 0.02;
    this.pattyOutline.rotation.x += 0.02;
  }
}

export default Patty;