console.log("Actividad Jardín 5. Composición con líneas en 3D con cajas");
console.log(gsap);
console.log(THREE);
console.log(lienzo);
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('3d');
const scene = new THREE.Scene();

//Cámara
//const camera = new THREE.Camera(fov, aspectRatio, near, far);
const camera = new THREE.PerspectiveCamera(45, canvas.width/canvas.height,0.1, 1000);

//Mesh
////Geometría
//SphereGeometry(radius, radialSegments, heightSegments);
const geometry = new THREE.BoxGeometry();
////Material
const material = new THREE.
MeshBasicMaterial({
   flatShading: true,
   specular: "#b62323ff",
   shininess: 100,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.z = -3;
mesh.rotation.x = 45;

//Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);


//Dar instrucción de renderizar o imprimir nuestro primer frame
renderer.render(scene, camera);