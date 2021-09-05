import MainScene from './scripts/scene'
import Camera from './scripts/camera';
import Renderer from './scripts/renderer';
import Light from './scripts/light';
import SceneRaycaster from './scripts/raycaster';
import Plane from './scripts/floor';
import Donut from './scripts/donut';
import Griddle from './scripts/griddle';
import Table from './scripts/table';
import Wall from './scripts/wall';
import Patty from './scripts/patty';

document.addEventListener('DOMContentLoaded', () => {
  const mainScene = new MainScene().scene;
  const mainCamera = new Camera().camera;
  const renderer = new Renderer().renderer;
  document.body.appendChild(renderer.domElement);

  const light = new Light();
  const sun = light.sun;
  const ambient = light.ambient;
  mainScene.add(sun);
  mainScene.add(ambient);

  const floorModel = new Plane();
  const floor = floorModel.floor;
  const floorLines = floorModel.line;
  mainScene.add(floor);
  mainScene.add(floorLines);

  const raycaster = new SceneRaycaster(mainScene, mainCamera, renderer);

  const griddle = new Griddle();
  const griddleBottom = griddle.griddleBottom;
  const griddleTop = griddle.griddleTop;
  const griddleBottomLines = griddle.bottomLine;
  const griddleTopLines = griddle.topLines;
  mainScene.add(griddleBottom);
  mainScene.add(griddleTop);
  mainScene.add(griddleBottomLines);
  mainScene.add(griddleTopLines);

  const table = new Table();
  const tableBottom = table.table;
  const tableLines = table.tableLines;
  mainScene.add(tableBottom);
  mainScene.add(tableLines);
  mainScene.add(table.board);
  mainScene.add(table.boardLines);
  mainScene.add(table.doorRight);
  mainScene.add(table.doorLeft);

  const griddleWall = new Wall();
  for(let i = 0 ; i < 4; i++){
    mainScene.add(griddleWall.griddleWall[i]);
    mainScene.add(griddleWall.griddleWallOutline[i]);
  }
  mainScene.add(griddleWall.tableWall);

  const patties = new Patty();
  mainScene.add(patties.patty);
  //mainScene.add(patties.pattyOutline);

  const sceneDonut = new Donut();
  const donut = sceneDonut.donut;
  const donutLines = sceneDonut.line;
  mainScene.add(donut);
  mainScene.add(donutLines);
  //patty.material.color.setHex(0x5c360b)
  console.log(patties.patty);
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(mainScene, mainCamera);
    raycaster.mouseInteraction();
  }
  animate();
})
