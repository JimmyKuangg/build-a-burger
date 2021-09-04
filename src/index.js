import MainScene from './scripts/scene'
import Camera from './scripts/camera';
import Renderer from './scripts/renderer';
import Light from './scripts/light';
import Donut from './scripts/donut';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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

  const sceneDonut = new Donut();
  mainScene.add(sceneDonut.line);
  mainScene.add(sceneDonut.donut);
  sceneDonut.donut.position.z = 5;
  sceneDonut.line.position.z = 4;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(mainScene, mainCamera);
    sceneDonut.rotate();
  }
  animate();
})
