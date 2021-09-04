import {Mesh, MeshToonMaterial, BoxGeometry, LineBasicMaterial, LineSegments, EdgesGeometry, PlaneGeometry, DoubleSide} from 'three';

class Table{
  constructor(){
    //Bottom part of table / main part
    const tableGeo = new BoxGeometry(30,18,15);
    const tableMaterial = new MeshToonMaterial({color: 0x64696E});
    this.table = new Mesh(tableGeo, tableMaterial);
    //Edge lines of bottom part of table
    const lineMaterial = new LineBasicMaterial({color: 0xfffffff});
    const tableEdges = new EdgesGeometry(tableGeo);
    this.tableLines = new LineSegments(tableEdges, lineMaterial);

  }
}

export default Table;