import {Mesh, MeshToonMaterial, PlaneGeometry, EdgesGeometry, LineSegments, LineBasicMaterial, DoubleSide} from 'three';

class Wall {
  constructor() {
    //Wall behind griddle
    const griddleWallGeo = new PlaneGeometry(20, 10);
    const griddleWallMaterial = new MeshToonMaterial({color: 0xbdbeb0, side: DoubleSide});
    this.griddleWall = []; //Store the 4 sections of the wall
    for(let i = 0; i < 4; i++){
      this.griddleWall.push(new Mesh(griddleWallGeo, griddleWallMaterial));
    }
    //Griddle wall outlines
    const lineMaterial = new LineBasicMaterial({color: 0x000000});
    const griddleWallEdges = new EdgesGeometry(griddleWallGeo);
    this.griddleWallOutline = [];
    for(let i = 0; i < 4; i++){
      this.griddleWallOutline.push(new LineSegments(griddleWallEdges, lineMaterial));
    }
    //Wall behind condiment table
    const tableWallGeo = new PlaneGeometry(40, 20);
    const tableWallMaterial = new MeshToonMaterial({color: 0xf9f1b2});
    this.tableWall = new Mesh(tableWallGeo, tableWallMaterial);
    //Table Wall Outline
    const tableWallEdges = new EdgesGeometry(tableWallGeo);
    this.tableWallOutline = new LineSegments(tableWallEdges, lineMaterial);
    // Positioning and Rotations
    this.griddleWall[0].position.set(10, 6, 79.3);
    this.griddleWall[0].rotateX(0.1);
    this.griddleWallOutline[0].position.set(10, 6, 79.3);
    this.griddleWallOutline[0].rotateX(0.1);

    this.griddleWall[1].position.set(30, 6, 79.3);
    this.griddleWall[1].rotateX(0.1);
    this.griddleWallOutline[1].position.set(30, 6, 79.3);
    this.griddleWallOutline[1].rotateX(0.1);

    this.griddleWall[2].position.set(10, 16, 79.3);
    this.griddleWall[2].rotateX(0.1);
    this.griddleWallOutline[2].position.set(10, 16, 79.3);
    this.griddleWallOutline[2].rotateX(0.1);

    this.griddleWall[3].position.set(30, 16, 79.3);
    this.griddleWall[3].rotateX(0.1);
    this.griddleWallOutline[3].position.set(30, 16, 79.3);
    this.griddleWallOutline[3].rotateX(0.1);

    this.tableWall.position.set(-20, 10, 79.3);
    this.tableWall.rotateX(0.1);
    this.tableWallOutline.position.set(-20,10,79.3);
    this.tableWallOutline.rotateX(0.1);
  }
}

export default Wall;