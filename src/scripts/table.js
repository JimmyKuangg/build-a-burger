import {Mesh, MeshToonMaterial, BoxGeometry, LineBasicMaterial, EdgesGeometry, LineSegments} from 'three';

class Table{
  constructor(){
    const tableGeo = new BoxGeometry(3.5, 2.66, 1);
    const tableMaterial = new MeshToonMaterial({color: 0x64696E});
    this.table = new Mesh(tableGeo, tableMaterial);

    const boardGeo = new BoxGeometry(3, 0.5, 0.03);
    const boardMaterial = new MeshToonMaterial({color: 0xF4BE2A});
    this.board = new Mesh(boardGeo, boardMaterial);

    const doorGeo = new BoxGeometry(0.7, 0.04, 0.8);
    const doorMaterial = new MeshToonMaterial({color: 0xAAB7C7});
    this.doorRight = new Mesh(doorGeo, doorMaterial);
    this.doorLeft = new Mesh(doorGeo, doorMaterial);

    const lineMaterial = new LineBasicMaterial({color: 0x000000});
    const tableEdges = new EdgesGeometry(tableGeo);
    this.tableOutline = new LineSegments(tableEdges, lineMaterial);

    const boardEdges = new EdgesGeometry(boardGeo);
    this.boardOutline = new LineSegments(boardEdges, lineMaterial);

    const doorEdges = new EdgesGeometry(doorGeo);
    this.doorRightOutline = new LineSegments(doorEdges, lineMaterial);
    this.doorLeftOutline = new LineSegments(doorEdges, lineMaterial);

    this.table.position.set(-1.65, -0.35, 2.8);
    this.table.rotateX(2);
    this.tableOutline.position.set(-1.65, -0.35, 2.8);
    this.tableOutline.rotateX(2);

    this.board.position.set(-1.41, -0.32, 4);
    this.board.rotateX(2);
    this.boardOutline.position.set(-1.41, -0.32, 4);
    this.boardOutline.rotateX(2);

    this.doorRight.position.set(-0.35, -0.85, 4.09);
    this.doorRight.rotateX(2);
    this.doorLeft.position.set(-1.1, -0.85, 4.09);
    this.doorLeft.rotateX(2);
    this.doorRightOutline.position.set(-0.35, -0.85, 4.09);
    this.doorRightOutline.rotateX(2);
    this.doorLeftOutline.position.set(-1.1, -0.85, 4.09);
    this.doorLeftOutline.rotateX(2);
  }
}

export default Table;