import MainScene from './scripts/scene'
import Camera from './scripts/camera';
import Renderer from './scripts/renderer';
import Light from './scripts/light';
import SceneRaycaster from './scripts/raycaster';
import Plane from './scripts/floor';
import Griddle from './scripts/griddle';
import Table from './scripts/table';
import Wall from './scripts/wall';
import Patty from './scripts/patty';


document.addEventListener('DOMContentLoaded', () => {
  const mainScene = new MainScene().scene;
  const mainCamera = new Camera().camera;
  const renderer = new Renderer().renderer;
  const raycaster = new SceneRaycaster(mainScene, mainCamera, renderer);
  document.body.appendChild(renderer.domElement);
  document.getElementsByTagName('canvas')[0].setAttribute('id', 'view');

  const light = new Light();
  mainScene.add(light.sun);
  mainScene.add(light.ambient);

  const floorModel = new Plane();
  mainScene.add(floorModel.floor);

  const griddle = new Griddle();
  mainScene.add(griddle.griddleBottom);
  mainScene.add(griddle.griddleTop);
  mainScene.add(griddle.griddleBottomOutline);
  mainScene.add(griddle.griddleTopOutline);

  const table = new Table();
  mainScene.add(table.table);
  mainScene.add(table.board);
  mainScene.add(table.doorRight);
  mainScene.add(table.doorLeft);
  mainScene.add(table.tableOutline);
  mainScene.add(table.boardOutline);
  mainScene.add(table.doorRightOutline);
  mainScene.add(table.doorLeftOutline);

  const griddleWall = new Wall();
  for(let i = 0 ; i < 4; i++){
    mainScene.add(griddleWall.griddleWall[i]);
    mainScene.add(griddleWall.griddleWallOutlines[i]);
  }
  mainScene.add(griddleWall.tableWall);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(mainScene, mainCamera);
  }
  raycaster.mouseInteraction();
  animate();  
})