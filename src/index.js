import MainScene from './scripts/scene'
import Camera from './scripts/camera';
import Renderer from './scripts/renderer';
import Light from './scripts/light';
import Plane from './scripts/floor';
import Donut from './scripts/donut';
import Griddle from './scripts/griddle';

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
  floor.rotateX(2);
  floorLines.rotateX(2);
  floor.position.z = 40;
  floorLines.position.z = 40;

  const griddle = new Griddle();
  const griddleBottom = griddle.griddleBottom;
  const griddleBottomLines = griddle.line;
  mainScene.add(griddleBottom);
  mainScene.add(griddleBottomLines);
  griddleBottom.position.set(12, -7.5, 77);
  griddleBottomLines.position.set(12, -7.5, 77);
  griddleBottom.rotateX(2);
  griddleBottomLines.rotateX(2);

  const sceneDonut = new Donut();
  const donut = sceneDonut.donut;
  const donutLines = sceneDonut.line;
  mainScene.add(donut);
  mainScene.add(donutLines);
  donut.position.y = 40;
  donutLines.position.y = 40;
  donut.position.z = 5;
  donutLines.position.z = 4;
  
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(mainScene, mainCamera);
    sceneDonut.rotate();
  }
  animate();
})
