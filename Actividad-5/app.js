console.log("Actividad Jardín 5. Composición con líneas en 3D con cajas");
console.log(gsap);
console.log(THREE);
console.log(lienzo);
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const scene = new THREE.Scene();

//Cámara
//const camera = new THREE.Camera(fov, aspectRatio, near, far);
const camera = new THREE.PerspectiveCamera(45, canvas.width/canvas.height,0.1, 1000);
camera.position.set(30,0,50);
//Mesh
////Geometría
//SphereGeometry(radius, radialSegments, heightSegments);
const geometry = new THREE.BoxGeometry(1.5,1.5,2.9);
////Material
const material = new THREE.
MeshPhongMaterial({
   flatShading: true,
   color: "#99e5e7",
   specular: "#ffffff",
   shininess: 100,
});
for (let i = 0; i < 15; i++) {
    let y = 100 + i * 20;
    let x = 50 + i * 20;
    const box = new THREE.Mesh(geometry, material);
    box.position.set(5 + x * 0.05, -3, -10 + y * 0.05);
    scene.add(box);
}

for (let i = 0; i < 15; i++) {
    let y = 100 + i * 20;
    let x = 50 + i * 20;
    const box = new THREE.Mesh(geometry, material);
    box.position.set(canvas.width/200 + x * 0.05, 1, -10 + y * 0.05);
    scene.add(box);
}

for (let i = 0; i < 15; i++) {
    let y = 100 + i * 20;
    let x = 50 + i * 20;
    const box = new THREE.Mesh(geometry, material);
    box.position.set(5, -3 + y * 0.05, -10 + x * 0.05);
    scene.add(box);
}

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.z = -10;
mesh.rotation.x = -90;

//Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);


//Dar instrucción de renderizar o imprimir nuestro primer frame



const topLight = new THREE.PointLight("#ffffff", 200, 200);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#ffffff", 200, 200);
frontLight.position.set(3,1,3);
scene.add(frontLight);

renderer.render(scene, camera);




