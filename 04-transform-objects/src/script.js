import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// //mmesh.position.set(0.7, -0.6, 1)

// scene.add(mesh)

// console.log('Mesh position length before normalize',mesh.position.length());
// //mesh.position.normalize(); // Reduce the vector to length 1.0
// console.log('Mesh position length after normlize',mesh.position.length());

// // Axes helper
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x0000ff }));

cube2.position.x = -2;
cube3.position.x = 2;

group.add(cube1);
group.add(cube2);
group.add(cube3);

// Scale
//mesh.scale.x = 2
//mesh.scale.y = 0.5
//mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5);

// Rotation
//mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// console.log('Distance to camera position', mesh.position.distanceTo(camera.position));

//camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
