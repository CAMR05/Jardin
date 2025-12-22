document.addEventListener("DOMContentLoaded", () => {
    
    const cards = Array.from(document.querySelectorAll('.card'));
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // Definimos las propiedades visuales exactas para cada posición
    // 0: Izquierda, 1: Centro, 2: Derecha
    const positions = [
        { x: -320, scale: 0.85, opacity: 0.6, zIndex: 5, filter: "blur(2px)" },
        { x: 0,    scale: 1,    opacity: 1,   zIndex: 10, filter: "blur(0px)" },
        { x: 320,  scale: 0.85, opacity: 0.6, zIndex: 5, filter: "blur(2px)" }
    ];

    // Array lógico para saber qué carta está en qué lugar
    let currentOrder = [0, 1, 2]; 

    function updateCards() {
        cards.forEach((card, index) => {
            // Averiguamos en qué posición visual debe estar esta carta
            // Si currentOrder es [2, 0, 1], la carta '0' va a la pos '1' (Centro)
            const visualPosIndex = currentOrder.indexOf(index);
            const props = positions[visualPosIndex];

            // Animación GSAP Maestra
            gsap.to(card, {
                x: props.x,
                scale: props.scale,
                opacity: props.opacity,
                zIndex: props.zIndex,
                filter: props.filter,
                duration: 0.5,
                ease: "power3.out" // Suavizado elegante
            });
        });
    }

    // --- Navegación ---
    
    function goNext() {
        // [0, 1, 2] -> [1, 2, 0] (El primero pasa al final)
        const first = currentOrder.shift();
        currentOrder.push(first);
        updateCards();
    }

    function goPrev() {
        // [0, 1, 2] -> [2, 0, 1] (El último pasa al principio)
        const last = currentOrder.pop();
        currentOrder.unshift(last);
        updateCards();
    }

    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);

    // --- Hover Interactions con GSAP ---
    // Solo queremos efecto hover en la carta central activa
    
    cards.forEach((card, index) => {
        
        card.addEventListener('mouseenter', () => {
            // Buscamos si esta carta es la que está en el centro visualmente
            const currentVisualIndex = currentOrder.indexOf(index);
            
            if (currentVisualIndex === 1) { // 1 es el índice del CENTRO
                gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
            } else {
                // Si es una carta lateral, le damos un pequeño brillo para invitar al click
                gsap.to(card, { opacity: 0.9, scale: 0.9, duration: 0.3 });
            }
        });

        card.addEventListener('mouseleave', () => {
            const currentVisualIndex = currentOrder.indexOf(index);
            const baseScale = positions[currentVisualIndex].scale;
            const baseOpacity = positions[currentVisualIndex].opacity;

            // Regresamos al estado base definido en 'positions'
            gsap.to(card, { 
                scale: baseScale, 
                opacity: baseOpacity, 
                duration: 0.3 
            });
        });

        // Click en cartas laterales para navegar
        card.addEventListener('click', () => {
            const currentVisualIndex = currentOrder.indexOf(index);
            if (currentVisualIndex === 0) goPrev(); // Si está a la izq, ir atrás
            if (currentVisualIndex === 2) goNext(); // Si está a la der, ir adelante
        });
    });

    // Iniciar
    updateCards();
});