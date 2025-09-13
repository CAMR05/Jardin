console.log("Actividad Jardín 7. Resize");
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
camera.position.set(0,0,10);
//Mesh
////Geometría
//SphereGeometry(radius, radialSegments, heightSegments);
const geometry = new THREE.ConeGeometry();
////Material
const material = new THREE.
MeshPhongMaterial({
   flatShading: true,
   color: "#084700",
   shininess: 100,
});


const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.z = -3;
mesh.rotation.x = -60;

//Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);

window.addEventListener("resize", function () {
    // Cambia el color del material a uno aleatorio
    mesh.material.color.setHex(Math.random() * 0xffffff);

    // Opcional: actualiza el tamaño del renderer y la cámara
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderer.setSize(canvas.width, canvas.height);
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();

    const topLight = new THREE.PointLight("#ffffff", 200, 200);
topLight.position.y = 5;
topLight.position.z = 3;
scene.add(topLight);

const frontLight = new THREE.PointLight("#ffffff", 200, 200);
frontLight.position.set(3,1,3);
scene.add(frontLight);

renderer.render(scene, camera);
});








