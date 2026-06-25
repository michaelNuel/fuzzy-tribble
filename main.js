import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);  
document.body.appendChild(renderer.domElement); 


const scene = new THREE.Scene(); 

const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
); 

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;   // Adds smooth inertial deceleration when dragging
orbit.dampingFactor = 0.05;
orbit.autoRotate = true;      // Enables automatic camera rotation around the scene
orbit.autoRotateSpeed = 1.0;  // Speed of automatic rotation

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper); 

// Add a ground grid to provide spatial reference when the camera moves
const gridHelper = new THREE.GridHelper(30, 30, 0x4f46e5, 0x374151);
scene.add(gridHelper);

camera.position.set(0, 3, 7);
orbit.update();

// Add a green cube (offset from center)
const boxGeometry = new THREE.BoxGeometry(); 
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });  
const box = new THREE.Mesh(boxGeometry, boxMaterial); 
box.position.set(-2, 0.5, 0); // Position offset
scene.add(box);

// Add a second object (blue/magenta wireframe sphere offset from center)
const sphereGeometry = new THREE.SphereGeometry(0.8, 16, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(2, 0.8, 0); // Position offset on the other side
scene.add(sphere);

function animate(time) {
  // Use absolute time (in seconds) to keep rotation speed constant
  box.rotation.x = time / 1000; 
  box.rotation.y = time / 1000; 

  sphere.rotation.y = -time / 1000; 

  // Update OrbitControls per frame to apply damping and auto-rotation
  orbit.update();

  renderer.render(scene, camera);  
}

// Handle window resizing dynamically
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

renderer.setAnimationLoop(animate)
