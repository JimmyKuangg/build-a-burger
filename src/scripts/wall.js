import {Mesh, MeshToonMaterial, PlaneGeometry, EdgesGeometry, LineSegments, LineBasicMaterial, DoubleSide} from 'three';

class Wall {
  constructor() {
    const griddleWallGeo = new PlaneGeometry(1.5, 1.5);
    const griddleWallMaterial = new MeshToonMaterial({color: 0xd7d7cb, side: DoubleSide});
    this.griddleWall = []; 
    for(let i = 0; i < 4; i++){
      this.griddleWall.push(new Mesh(griddleWallGeo, griddleWallMaterial));
    }
    
    const tableWallGeo = new PlaneGeometry(2.8, 2);
    const tableWallMaterial = new MeshToonMaterial({color: 0xf9f1b2});
    this.tableWall = new Mesh(tableWallGeo, tableWallMaterial);
    
    const lineMaterial = new LineBasicMaterial({color: 0x0000000});
    const griddleWallEdges = new EdgesGeometry(griddleWallGeo);
    this.griddleWallOutlines = [];
    for(let i = 0; i < 4; i++){
      this.griddleWallOutlines.push(new LineSegments(griddleWallEdges, lineMaterial));
    }

    const tableWallEdges = new EdgesGeometry(tableWallGeo);
    this.tableWallOutline = new LineSegments(tableWallEdges, lineMaterial);

    this.griddleWall[0].position.set(0.86, 1.2, 0);
    this.griddleWall[0].rotateX(0.2);
    this.griddleWallOutlines[0].position.set(0.86, 1.2, 0);
    this.griddleWallOutlines[0].rotateX(0.2);

    this.griddleWall[1].position.set(2.36, 1.2, 0);
    this.griddleWall[1].rotateX(0.2);
    this.griddleWallOutlines[1].position.set(2.36, 1.2, 0);
    this.griddleWallOutlines[1].rotateX(0.2);

    this.griddleWall[2].position.set(0.87, 2.75, 0);
    this.griddleWall[2].rotateX(0.2);
    this.griddleWallOutlines[2].position.set(0.87, 2.75, 0);
    this.griddleWallOutlines[2].rotateX(0.2);

    this.griddleWall[3].position.set(2.372, 2.75, 0);
    this.griddleWall[3].rotateX(0.2);
    this.griddleWallOutlines[3].position.set(2.372, 2.75, 0);
    this.griddleWallOutlines[3].rotateX(0.2);

    this.tableWall.position.set(-1.28, 1.8, 0);
    this.tableWall.rotateX(0.2);
    this.tableWallOutline.position.set(-1.28, 1.8, 0);
    this.tableWallOutline.rotateX(0.2);
  }
}

export default Wall;