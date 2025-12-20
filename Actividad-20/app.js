document.addEventListener("DOMContentLoaded", () => {
    
    // Seleccionamos los elementos
    const parallaxElements = document.querySelectorAll('.parallax');

    // Escuchamos el movimiento del mouse
    document.addEventListener('mousemove', (e) => {
        
        // Calculamos la posición del mouse relativa al centro (valores entre -1 y 1)
        // Esto nos dice qué tan lejos del centro está el cursor
        const x = (e.clientX / window.innerWidth - 0.5) * 2; 
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        parallaxElements.forEach(el => {
            // Leemos la velocidad personalizada de cada elemento
            // Si no tiene data-speed, usamos 0.05 por defecto
            const speed = el.getAttribute('data-speed') || 0.05;

            // GSAP al rescate
            gsap.to(el, {
                x: x * speed * 100, // Multiplicador de distancia horizontal
                y: y * speed * 100, // Multiplicador de distancia vertical
                rotation: x * speed * 10, // EXTRA: Una leve rotación para más realismo
                duration: 1, // Retardo de la animación (da el efecto "flotante")
                ease: "power3.out", // Suavizado de movimiento (física realista)
                overwrite: "auto" // Asegura que no se acumulen animaciones
            });
        });
    });
});