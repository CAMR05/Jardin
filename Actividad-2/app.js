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
const geometry = new THREE.CylinderGeometry(1,1,5);
const geometry2 = new THREE.ConeGeometry(3,4,20,30);
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
var matcapMaterial2;
var mesh;
var mesh2;
textureLoader.load(
   // Textura URL
   './texturas/matcap3.png',
   // on Load callback
   function (texture1) {
       matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture1 } );
textureLoader.load(
    './texturas/matcap4.png',
   function (texture2) {
       matcapMaterial2 = new THREE.MeshMatcapMaterial( { matcap: texture2 } );
       // Mesh.
       mesh = new THREE.Mesh( geometry, matcapMaterial );
       mesh2 = new THREE.Mesh( geometry2, matcapMaterial2 );
       // 3. Poner objeto en la escena.
       scene.add(mesh);
       mesh.position.x = 1;
       mesh.position.y = -3;
       mesh.position.z = -15;

       scene.add(mesh2);
       mesh2.position.x = 1;
       mesh2.position.y = 1;
       mesh2.position.z = -15;
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

//animate();

