import {TorusGeometry, MeshToonMaterial, Mesh, EdgesGeometry, LineSegments, LineBasicMaterial} from 'three';

class Donut {
  constructor() {
    const geo = new TorusGeometry(10, 6, 26, 26);
    const material = new MeshToonMaterial({color: 0xbd9542});
    this.donut = new Mesh(geo, material);
    const edges = new EdgesGeometry(geo);
    this.line = new LineSegments(edges, new LineBasicMaterial({color : 0xffffff}));
    
    this.donut.position.y = 40;
    this.line.position.y = 40;
    this.donut.position.z = 5;
    this.line.position.z = 4;
  }

  rotate(){
    this.donut.rotation.x += 0.01;
    this.donut.rotation.y += 0.01;
    this.line.rotation.x += 0.01;
    this.line.rotation.y += 0.01;
  }
}

export default Donut;