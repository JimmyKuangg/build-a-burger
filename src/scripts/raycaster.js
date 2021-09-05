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
      this.mouse.x = (mouse.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
      this.mouse.y = -(mouse.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);
    });

    window.addEventListener('mousedown', mouse=>{
      this.mouse.x = (mouse.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
      this.mouse.y = -(mouse.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);
      let intersects = this.raycaster.intersectObjects(this.scene.children);
    })

    window.addEventListener('mouseup', mouse=>{
      this.mouse.x = (mouse.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
      this.mouse.y = -(mouse.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);
    })

  }


}

export default SceneRaycaster;