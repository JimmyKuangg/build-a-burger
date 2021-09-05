import {Raycaster, Vector2} from 'three';

class SceneRaycaster{
  constructor(scene, camera, renderer){
    this.raycaster = new Raycaster();
    this.mouse = new Vector2();
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
  }

  mouseInteraction(){
    this.renderer.domElement.addEventListener('mousemove', mouse =>{
      this.mouse.x = -((((innerWidth - 1200) / 2) - mouse.clientX) * 0.01);
      // this.mouse.y = ((((innerHeight - 700) / 2) - mouse.clientY) * 0.01);
      //console.log(this.mouse.x);
      //console.log((innerWidth - 1200 ) / 2);
      //console.log(window.innerWidth);
      //console.log(mouse);
    });

    this.renderer.domElement.addEventListener('mousedown', mouse=>{
      this.mouse.x = -((((innerWidth - 1200) / 2) - mouse.clientX) * 0.01)
      this.raycaster.setFromCamera(this.mouse, this.camera);
      let intercepts = this.raycaster.intersectObjects(this.scene.children);
      console.log(intercepts[0]);
    });
  }


}

export default SceneRaycaster;