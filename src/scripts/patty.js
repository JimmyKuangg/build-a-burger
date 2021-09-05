import { CylinderGeometry, MeshToonMaterial, Mesh, LineBasicMaterial, EdgesGeometry, LineSegments} from "three";

class Patty {
  constructor(){
    const pattyGeo = new CylinderGeometry(0.25, 0.25, 0.1, 25);
    const pattyMaterial = new MeshToonMaterial({color: 0xD26163});
    this.patty = new Mesh(pattyGeo, pattyMaterial);

    const lineMaterial = new LineBasicMaterial({color: 0xff0063});
    const pattyEdges = new EdgesGeometry(pattyGeo);
    this.pattyOutline = new LineSegments(pattyEdges, lineMaterial);

    this.patty.userData.draggable = true;
  }

  flip() {
    this.patty.rotation.x += 0.02;
    this.pattyOutline.rotation.x += 0.02;
  }
}

export default Patty;