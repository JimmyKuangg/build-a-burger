import {Mesh, MeshToonMaterial, BoxGeometry, LineBasicMaterial, LineSegments, EdgesGeometry} from 'three';

class Table{
  constructor(){
    //Bottom part of table / main part
    const tableGeo = new BoxGeometry(30, 13, 10);
    const tableMaterial = new MeshToonMaterial({color: 0x64696E});
    this.table = new Mesh(tableGeo, tableMaterial);
    const lineMaterial = new LineBasicMaterial({color: 0x000000});
    const tableEdges = new EdgesGeometry(tableGeo);
    this.tableLines = new LineSegments(tableEdges, lineMaterial);
    //Board of the table 
    const boardGeo = new BoxGeometry(30, 1.8, 0.3);
    const boardMaterial = new MeshToonMaterial({color: 0xF4BE2A});
    this.board = new Mesh(boardGeo, boardMaterial);
    const boardEdges = new EdgesGeometry(boardGeo);
    this.boardLines = new LineSegments(boardEdges, lineMaterial);
    //Doors on the front of the table
    const doorGeo = new BoxGeometry(5.5, 4, 0.1);
    const doorMaterial = new MeshToonMaterial({color: 0xAAB7C7});
    this.doorRight = new Mesh(doorGeo, doorMaterial);
    this.doorLeft = new Mesh(doorGeo, doorMaterial);
    //Position and rotations
    this.table.position.set(-15,-5.5,87);
    this.table.rotateX(2);
    this.tableLines.position.set(-15,-5.5,87);
    this.tableLines.rotateX(2);

    this.board.position.set(-15, -2, 95.7);
    this.board.rotateX(2);
    this.boardLines.position.set(-15, -2, 95.7);
    this.boardLines.rotateX(2);

    this.doorRight.position.set(-3, -5.5, 95);
    this.doorRight.rotateX(0.3);

    this.doorLeft.position.set(-8.8, -5.5, 95);
    this.doorLeft.rotateX(0.3);
  }
}

export default Table;