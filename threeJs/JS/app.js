
const container = document.querySelector('#game-container');

//escena container
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00ff00);

//camara, perspectiva y ortogonal 
//el primer parametro de perspectiva es el campo de vision que esta en grados y despues el ratio, el siguiente es que tan cerca se renderizan los objetos y el siguiente que tan lejos 
const camara = new THREE.PerspectiveCamera(
    35,
    container.clientWidth/container.clientHeight,
    0.1,
    1000
);
//todos los eslementos que vayamos a crear se posicionaran en este punto.
camera.position.set(0, 10, 15);
camera.lookAt(0,0,0);

//Mesh
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
    color: 'teal'
});
const box_mesh = new THREE.Mesh(geometry, material);
scene.add(box_mesh);

box_mesh.rotateX(0.1);
box_mesh.rotateX(0.1);




//Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

const update = () => {
    renderer.serAnimationloop(() => update());
    renderer.render.rotateX(0.01);
    renderer.render.rotateX(0.01);
    renderer.render(scene, camera);
    
}
update();


