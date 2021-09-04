import {Mesh, MeshToonMaterial, BoxGeometry, LineBasicMaterial, LineSegments, EdgesGeometry} from 'three';

class Griddle{
  constructor(){
    const geo = new BoxGeometry(30, 20, 15);
    const material = new MeshToonMaterial({color: 0xd7d7cb});
    this.griddleBottom = new Mesh(geo, material);

    const edges = new EdgesGeometry(geo);
    this.line = new LineSegments(edges, new LineBasicMaterial({color: 0xfffffff}));
  }
}

export default Griddle;