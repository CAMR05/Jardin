console.log("Actividad Jardín 13 Seno y Coseno - Three.js");

// 1. Obtenemos el canvas del HTML
const canvas = document.getElementById("lienzo");

// 2. Configuración básica (usando el canvas existente)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas,
    antialias: true 
});
renderer.setSize(window.innerWidth, window.innerHeight);

// 3. Crear el Mesh (Cono)
const geometry = new THREE.ConeGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cone = new THREE.Mesh(geometry, material);
scene.add(cone);

// 4. Luces
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(1, 1, 1);
scene.add(light);
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// 5. Posición de la Cámara
camera.position.z = 5;

// 6. Reloj
const clock = new THREE.Clock();

// 7. Parámetros de la animación
const centroX = 0;      // Punto central del movimiento horizontal
const alturaBase = 0.5;   // Punto central del movimiento vertical
const amplitud = 1.5;   // Qué tan lejos se mueve desde el centro (en X y Y)
const velocidad = 2;    // Qué tan rápido se mueve

// 8. Bucle de Animación
function animate() {
    requestAnimationFrame(animate);

    // Obtener el tiempo transcurrido
    const elapsedTime = clock.getElapsedTime();

    // --- ¡Aquí está la magia de Seno y Coseno! ---

    // Usamos Coseno (Math.cos) para la posición X (movimiento horizontal)
    // Empieza en 1 * amplitud (en el extremo derecho)
    cone.position.x = centroX + (Math.cos(elapsedTime * velocidad) * amplitud);

    // Usamos Seno (Math.sin) para la posición Y (movimiento vertical)
    // Empieza en 0 (en el centro vertical)
    cone.position.y = alturaBase + (Math.sin(elapsedTime * velocidad) * amplitud);


    // Renderizar la escena
    renderer.render(scene, camera);
}

// Manejar redimensionamiento
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ¡Empezar la animación!
animate();