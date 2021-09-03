import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
        
//SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xfffff);
        
//CAMERA
const camera = new THREE.PerspectiveCamera(75, 1000 / 700, 0.1, 1000);
camera.position.z = 25;
        
//RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(1000, 700);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

//TEXTURE LOADER
const textureLoader = new THREE.TextureLoader();    
        
//FLOOR
//TEXTURE
const floorTexture = textureLoader.load('./img/floor_tile.jpg');
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set( 10, 10 );
//SHAPE AND MESH
const floorGeo = new THREE.PlaneGeometry(110, 50);
const floorMaterial = new THREE.MeshBasicMaterial({map: floorTexture});
const floor = new THREE.Mesh(floorGeo, floorMaterial);
floor.rotation.x = -1;
scene.add(floor);

//HOT PLATE BOTTOM
//SHAPE AND MESH
const hotPlateGeo = new THREE.BoxGeometry(10, 6, 3);
const hotPlateMesh = new THREE.MeshBasicMaterial({color: 0xE1E6E0});
const hotPlate = new THREE.Mesh(hotPlateGeo, hotPlateMesh);
scene.add(hotPlate);
//ROTATION AND POSITIONING
hotPlate.rotation.x = -1;
hotPlate.position.x = 4;
hotPlate.position.z = 20;

//HOT PLATE TOP
//SHAPE AND MESH
const hotPlateTopGeo = new THREE.PlaneGeometry(10,7.5);
const hotPlateTopMesh = new THREE.MeshBasicMaterial({color: 0xff0000});
const hotPlateTop = new THREE.Mesh(hotPlateTopGeo, hotPlateTopMesh);
scene.add(hotPlateTop);
hotPlateTop.rotation.x = -1;
hotPlateTop.position.x = 4;
hotPlateTop.position.y = 1.79;
hotPlateTop.position.z = 20;


//TOPPINGS TABLE
//SHAPE AND MESH
const condimentsGeo = new THREE.BoxGeometry(10, 6, 3);
const condimentsMesh = new THREE.MeshBasicMaterial({color: 0x00ff00});
const condiments = new THREE.Mesh(condimentsGeo, condimentsMesh);
scene.add(condiments);
condiments.rotation.x = -1;
condiments.position.x = -6;
condiments.position.z = 20;

//BAGEL THAT FLOATS
//TEXTURE
const bagelTexture = textureLoader.load('./img/doughnut.jpg')
bagelTexture.wrapS = THREE.RepeatWrapping;
bagelTexture.wrapT = THREE.RepeatWrapping;
bagelTexture.repeat.set( 1.5, 1 );
//SHAPE AND MESH
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