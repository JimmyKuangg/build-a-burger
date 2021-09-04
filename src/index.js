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
  const ambience = new Light().ambient;
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
  const griddleTop = griddle.griddleTop;
  const griddleBottomLines = griddle.line;
  mainScene.add(griddleBottom);
  mainScene.add(griddleTop);
  mainScene.add(griddleBottomLines);
  griddleTop.position.set(12, -0.5, 83.5);
  griddleBottom.position.set(12, -7.5, 80);
  griddleBottomLines.position.set(12, -7.5, 80);
  griddleTop.rotateX(2);
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
