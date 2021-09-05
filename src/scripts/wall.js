import {Mesh, MeshToonMaterial, PlaneGeometry, EdgesGeometry, LineSegments, LineBasicMaterial, DoubleSide} from 'three';

class Wall {
  constructor() {
    const griddleWallGeo = new PlaneGeometry(2.5, 2);
    const griddleWallMaterial = new MeshToonMaterial({color: 0xd7d7cb, side: DoubleSide});
    this.griddleWall = []; 
    for(let i = 0; i < 4; i++){
      this.griddleWall.push(new Mesh(griddleWallGeo, griddleWallMaterial));
    }
    
    const tableWallGeo = new PlaneGeometry(10, 3);
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

    this.griddleWall[0].position.set(1.35, 0.9, 1.8);
    this.griddleWall[0].rotateX(0.2);
    this.griddleWallOutlines[0].position.set(1.35, 0.9, 1.8);
    this.griddleWallOutlines[0].rotateX(0.2);

    this.griddleWall[1].position.set(3.85, 0.9, 1.8);
    this.griddleWall[1].rotateX(0.2);
    this.griddleWallOutlines[1].position.set(3.85, 0.9, 1.8);
    this.griddleWallOutlines[1].rotateX(0.2);

    this.griddleWall[2].position.set(1.35, 3.1, 1.8);
    this.griddleWall[2].rotateX(0.2);
    this.griddleWallOutlines[2].position.set(1.35, 3.1, 1.8);
    this.griddleWallOutlines[2].rotateX(0.2);

    this.griddleWall[3].position.set(3.85, 3.1, 1.8);
    this.griddleWall[3].rotateX(0.2);
    this.griddleWallOutlines[3].position.set(3.85, 3.1, 1.8);
    this.griddleWallOutlines[3].rotateX(0.2);

    this.tableWall.position.set(-1.28, 1.8, 1,8);
    this.tableWall.rotateX(0.2);
    this.tableWallOutline.position.set(-1.28, 1.8, 0);
    this.tableWallOutline.rotateX(0.2);
  }
}

export default Wall;