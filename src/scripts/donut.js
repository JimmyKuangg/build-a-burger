import {TorusGeometry, MeshToonMaterial, Mesh, EdgesGeometry, LineSegments, LineBasicMaterial} from 'three';

class Donut {
  constructor() {
    const geo = new TorusGeometry(10, 6, 26, 26);
    const material = new MeshToonMaterial({color: 0xbd9542});
    this.donut = new Mesh(geo, material);
    const edges = new EdgesGeometry(geo);
    this.line = new LineSegments(edges, new LineBasicMaterial({color : 0xffffff}));
  }
  
  rotate(){
    this.donut.rotation.x += 0.01;
    this.donut.rotation.y += 0.01;
    this.line.rotation.x += 0.01;
    this.line.rotation.y += 0.01;
  }
}

export default Donut;