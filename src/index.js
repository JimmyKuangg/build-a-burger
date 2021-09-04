import MainScene from './scripts/scene'
import Camera from './scripts/camera';
import Renderer from './scripts/renderer';
import Light from './scripts/light';
import Plane from './scripts/floor';
import Donut from './scripts/donut';
import Griddle from './scripts/griddle';
import Table from './scripts/table';

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

  const sceneDonut = new Donut();
  const donut = sceneDonut.donut;
  const donutLines = sceneDonut.line;
  mainScene.add(donut);
  mainScene.add(donutLines);
  
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(mainScene, mainCamera);
    sceneDonut.rotate();
  }
  animate();
})
