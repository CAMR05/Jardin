console.log("Actividad Jardín 1. Atardecer");
console.log(gsap); 
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
const geometry = new THREE.SphereGeometry();
////Material
const material = new THREE.
MeshNormalMaterial({
   flatShading: true,
});


//fondo de la escena
scene.background = new THREE.Color("#000658");

const planeGeometry = new THREE.PlaneGeometry(50,50);
const planeMaterial = new THREE.MeshBasicMaterial({color:"#000658"});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI/2;
plane.position.y = -6;
scene.add(plane);

///////// CONFIGURACIÓN DE MATCAPS
///////// INICIO
// Ayuda.
// Material.
const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var mesh;
var matcapMap = textureLoader.load(
   // Textura URL
   './texturas/matcap2.png',
   // on Load callback
   function (texture) {
       matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture } );
       // Mesh.
       mesh = new THREE.Mesh( geometry, matcapMaterial );
       // 3. Poner objeto en la escena.
       scene.add(mesh);
       mesh.position.x = -8;
       mesh.position.y = -3;
       mesh.position.z = -10;
       // 4. Activar animación.
       animate();
   },
   // on Progress (no funciona por ahora)
   undefined,
   // on Error callback
   function (error) { console.error("Algo salio mal con la textura,", error); }
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
   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.01;
   renderer.render(scene, camera);
}
window.addEventListener("mousedown", function () {
    const tl = gsap.timeline();
        tl.to(
            mesh.position,
            {
                y:2.5,
                x:0.5,
                
                duration:4, //segundos
                ease:"power1.in",
                }
        );
                    tl.to(
                        mesh.position,
                        {
                            x:8,
                            y:-3,
                            duration:4,
                            ease:"power1.out",
                        },
                   "-=0.4" );
                
});
animate();

