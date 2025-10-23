console.log("Actividad Jardín 13 Seno y Coseno - Three.js");
console.log(THREE);

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Creamos nuestros elementos básicos:
//Escena
const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // 2. Crear el Mesh (el objeto)
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Añadir una luz para ver el cubo
        const light = new THREE.DirectionalLight(0xffffff, 3);
        light.position.set(1, 1, 1);
        scene.add(light);
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        // Posición inicial de la cámara
        camera.position.z = 5;

        // 3. El Reloj (para manejar el tiempo)
        const clock = new THREE.Clock();

        // 4. Parámetros de levitación
        const alturaBase = 0.5;   // El punto central de la levitación
        const amplitud = 0.75;  // Cuánto sube y baja desde el punto central
        const velocidad = 2;    // Qué tan rápido sube y baja

        // 5. El Bucle de Animación
        function animate() {
            requestAnimationFrame(animate);

            // Obtener el tiempo transcurrido
            const elapsedTime = clock.getElapsedTime();

            // --- ¡Aquí está la magia! ---
            // Usamos seno para la posición Y
            cube.position.y = alturaBase + (Math.sin(elapsedTime * velocidad) * amplitud);

            // (Opcional) Podemos usar coseno para otra cosa, como la rotación
            cube.rotation.x = elapsedTime * 0.5;
            cube.rotation.y = elapsedTime * 0.5;

            // Renderizar la escena
            renderer.render(scene, camera);
        }

        // Manejar redimensionamiento de ventana
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // ¡Empezar la animación!
        animate();


