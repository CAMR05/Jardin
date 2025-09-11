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
camera.position.set(0,0,100);
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
    let x = 500 + 70 + i * 50; 
    for (let j = 0; j < 10; j++) { 
        let y = 60 + j * 70;
        const box = new THREE.Mesh(geometry, material);
        box.position.set((x - canvas.width/2) * 0.05, (y - canvas.height/2) * -0.05, -20);
        scene.add(box);
    }
}



// Horizontales (como las líneas horizontales de actividad 4)
for (let i = 0; i < 15; i++) {
    let y = 100 + i * 20;
    for (let j = 0; j < 20; j++) {
        let x = 500 + j * 40;
        const box = new THREE.Mesh(geometry, material);
        box.position.set((x - canvas.width/2) * 0.05, (y - canvas.height/2) * -0.05, -20);
        scene.add(box);
    }
}

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.z = -40;
mesh.rotation.x = -90;

//Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);


//Dar instrucción de renderizar o imprimir nuestro primer frame



const topLight = new THREE.PointLight("#ffffff", 200, 200);
topLight.position.y = 5;
topLight.position.z = 3;
scene.add(topLight);

const frontLight = new THREE.PointLight("#ffffff", 200, 200);
frontLight.position.set(3,1,3);
scene.add(frontLight);

renderer.render(scene, camera);




