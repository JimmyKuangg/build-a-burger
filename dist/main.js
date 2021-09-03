import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
        
//SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfffff);
        
//CAMERA
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
camera.position.z = 25;
        
//RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

//TEXTURE LOADER
const textureLoader = new THREE.TextureLoader();    
        
//PLANE
//TEXTURE
const planeTexture = textureLoader.load('./img/floor_tile.jpg');
planeTexture.wrapS = THREE.RepeatWrapping;
planeTexture.wrapT = THREE.RepeatWrapping;
planeTexture.repeat.set( 10, 10 );
//SHAPE AND MESH
const planeGeo = new THREE.PlaneGeometry(110, 50);
const planeMaterial = new THREE.MeshBasicMaterial({map: planeTexture});
const plane = new THREE.Mesh(planeGeo, planeMaterial);
plane.rotation.x = -1;
scene.add(plane);

//BAGEL THAT FLOATS
//TEXTURE
const bagelTexture = textureLoader.load('./img/doughnut.jpg')
bagelTexture.wrapS = THREE.RepeatWrapping;
bagelTexture.wrapT = THREE.RepeatWrapping;
bagelTexture.repeat.set( 1.5, 1 );
const bagelGeo = new THREE.TorusGeometry(5, 3, 26, 26);
const bagelMaterial = new THREE.MeshBasicMaterial({map : bagelTexture});
const bagel = new THREE.Mesh(bagelGeo, bagelMaterial);
bagel.position.y += 10;
scene.add(bagel);

//ANIMATION
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    bagel.rotation.x += 0.01;
    bagel.rotation.y += 0.01;
}

animate();