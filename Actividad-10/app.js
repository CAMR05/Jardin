console.log("Actividad Jardín 2. Árbol");
console.log(THREE);

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Creamos nuestros elementos básicos:
//Escena
const scene = new THREE.Scene();

//Cámara
//const camera = new THREE.Camera(fov, aspectRatio, near, far);
const camera = new THREE.PerspectiveCamera(45, canvas.width/canvas.height,0.1, 1000);

//Mesh
////Geometría
//SphereGeometry(radius, radialSegments, heightSegments);
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
const geometry = new THREE.CylinderGeometry(1,1,5);
const geometry2 = new THREE.ConeGeometry(3,4,20,30);
const geometry3 = new THREE.ConeGeometry(2,3,20,30);
const geometry4 = new THREE.ConeGeometry(1,2,20,30);
////Material
const material = new THREE.
MeshNormalMaterial({
   flatShading: true,
});



///////// CONFIGURACIÓN DE MATCAPS
///////// INICIO
// Ayuda.
// Material.
const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var colorMaterial;
var mesh;
var mesh2;
var mesh3;
var mesh4; 
textureLoader.load(
   // Textura URL
   './texturas/matcap3.png',
   // on Load callback
   function (texture1) {
       matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture1 } );
textureLoader.load(
    './texturas/matcap4.png',
   function (texture2) {
       colorMaterial = new THREE.MeshPhongMaterial( {
        flatShading: true,
        color: "#005e17" } );
       // Mesh.
       mesh = new THREE.Mesh( geometry, matcapMaterial );
       mesh2 = new THREE.Mesh( geometry2, colorMaterial );
       mesh3 = new THREE.Mesh( geometry3, colorMaterial );
       mesh4 = new THREE.Mesh( geometry4, colorMaterial );
       // 3. Poner objeto en la escena.
       scene.add(mesh,mesh2,mesh3,mesh4);
       mesh.position.x = 1;
       mesh.position.y = -3;
       mesh.position.z = -15;
       mesh2.position.x = 1;
       mesh2.position.y = 1;
       mesh2.position.z = -15;
       mesh3.position.x = 1;
       mesh3.position.y = 3;
       mesh3.position.z = -15;
       mesh4.position.x = 1;
       mesh4.position.y = 5;
       mesh4.position.z = -15;

       window.addEventListener("mousedown", function (){
        mesh2.material.color.set(randomColor);
        mesh3.material.color.set(randomColor);
        mesh4.material.color.set(randomColor);
       })

       
       // 4. Activar animación.
       animate();
   },
   // on Progress (no funciona por ahora)
   undefined,
   // on Error callback
   function (error) { console.error("Algo salio mal con la textura 3,", error); }
            );
        },
    function (error) { console.error("Algo salio mal con la textura 4,", error); }
    );



//////// FIN


//Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);


//Dar instrucción de renderizar o imprimir nuestro primer frame
renderer.render(scene, camera);

// Tip para animar nuestro mesh:
function animate() {
   requestAnimationFrame(animate);

   renderer.render(scene, camera);
}

const topLight = new THREE.PointLight("#ffffff", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#ffffff", 100, 100);
frontLight.position.set(3,1,3);
scene.add(frontLight);



//animate();

