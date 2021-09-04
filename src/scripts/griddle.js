import {Mesh, MeshToonMaterial, BoxGeometry, LineBasicMaterial, LineSegments, EdgesGeometry, PlaneGeometry, DoubleSide} from 'three';

class Griddle{
  constructor(){
    const griddleBottomGeo = new BoxGeometry(30, 18, 15);
    const griddleBottomMaterial = new MeshToonMaterial({color: 0xd7d7cb});
    this.griddleBottom = new Mesh(griddleBottomGeo, griddleBottomMaterial);

    const griddleTopGeo = new PlaneGeometry(30, 16);
    const griddleTopMaterial = new MeshToonMaterial({color: 0x9e9b8a, side: DoubleSide});
    this.griddleTop = new Mesh(griddleTopGeo, griddleTopMaterial);

    const edges = new EdgesGeometry(griddleBottomGeo);
    this.line = new LineSegments(edges, new LineBasicMaterial({color: 0xfffffff}));
  }
}

export default Griddle;