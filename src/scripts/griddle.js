import {Mesh, MeshToonMaterial, BoxGeometry, PlaneGeometry, DoubleSide, LineBasicMaterial, EdgesGeometry, LineSegments} from 'three';

class Griddle{
  constructor(){
    const griddleBottomGeo = new BoxGeometry(4, 2.8, 1);
    const griddleBottomMaterial = new MeshToonMaterial({color: 0xd7d7cb});
    this.griddleBottom = new Mesh(griddleBottomGeo, griddleBottomMaterial);
  
    const griddleTopGeo = new PlaneGeometry(3.9, 2.65);
    const griddleTopMaterial = new MeshToonMaterial({color: 0x9e9b8a, side: DoubleSide});
    this.griddleTop = new Mesh(griddleTopGeo, griddleTopMaterial);

    const lineMaterial = new LineBasicMaterial({color: 0x0000000});
    const griddleBottomEdges = new EdgesGeometry(griddleBottomGeo);
    this.griddleBottomOutline = new LineSegments(griddleBottomEdges, lineMaterial);

    const griddleTopEdges = new EdgesGeometry(griddleTopGeo);
    this.griddleTopOutline = new LineSegments(griddleTopEdges, lineMaterial);

    this.griddleBottom.position.set(2.1, -0.4, 2.75);
    this.griddleBottom.rotateX(2);
    this.griddleBottomOutline.position.set(2.1, -0.4, 2.75);
    this.griddleBottomOutline.rotateX(2);

    this.griddleTop.position.set(2.05, 0.05, 3);
    this.griddleTop.rotateX(2);
    this.griddleTopOutline.position.set(2.05, 0.05, 3);
    this.griddleTopOutline.rotateX(2);
  }
}

export default Griddle;