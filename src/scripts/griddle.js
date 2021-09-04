import {Mesh, MeshToonMaterial, BoxGeometry, LineBasicMaterial, LineSegments, EdgesGeometry, PlaneGeometry, DoubleSide} from 'three';

class Griddle{
  constructor(){
    //Bottom part of the griddle unit
    const griddleBottomGeo = new BoxGeometry(30, 18, 15);
    const griddleBottomMaterial = new MeshToonMaterial({color: 0xd7d7cb});
    this.griddleBottom = new Mesh(griddleBottomGeo, griddleBottomMaterial);
    //Top part of the griddle / actual hot plate
    const griddleTopGeo = new PlaneGeometry(30, 16);
    const griddleTopMaterial = new MeshToonMaterial({color: 0x9e9b8a, side: DoubleSide});
    this.griddleTop = new Mesh(griddleTopGeo, griddleTopMaterial);
    //Griddle bottom edges and lines
    const lineMaterial = new LineBasicMaterial({color: 0x000000});
    const edges = new EdgesGeometry(griddleBottomGeo);
    this.bottomLine = new LineSegments(edges, lineMaterial );
    //Griddle top edges and lines
    const topEdges = new EdgesGeometry(griddleTopGeo);
    this.topLines = new LineSegments(topEdges, lineMaterial);
    //Position and rotations
    this.griddleTop.position.set(15, -1.3, 86.8);
    this.topLines.position.set(15, -1.3, 86.8);
    this.griddleTop.rotateX(2.02);
    this.topLines.rotateX(2.02);

    this.griddleBottom.position.set(15, -8.3, 83);
    this.bottomLine.position.set(15, -8.3, 83);
    this.griddleBottom.rotateX(2);
    this.bottomLine.rotateX(2);
  }

}

export default Griddle;