document.addEventListener('DOMContentLoaded', () => {

    // --- SELECCIÓN DE ELEMENTOS ---
    const cards = document.querySelectorAll('.card');
    const centralCard = document.querySelector('.c-3');
    const centralText = document.querySelector('.c-text');
    const jamText = document.querySelector('.footer .big-text:first-child');
    const footerInfo = document.querySelector('.info');
    const menuLabel = document.querySelector('.left'); 
    const menuIcon = document.querySelector('.menu-icon');

    // --- CONFIGURACIÓN INICIAL (SET) ---
    // Aseguramos estados iniciales para evitar parpadeos
    if(centralText) gsap.set(centralText, { autoAlpha: 0, y: 10 });
    
    // CRÍTICO: Le recordamos a GSAP que la tarjeta 3 está centrada con CSS (-50%)
    if(centralCard) gsap.set(centralCard, { xPercent: -50 });


    // --- 1. ANIMACIÓN DE LAS TARJETAS (CARDS) ---
    cards.forEach(card => {
        const isCentral = card.classList.contains('c-3');

        // -- Entrada (Hover) --
        card.addEventListener('mouseenter', () => {
            // zIndex inmediato para que suba de capa al instante
            gsap.set(card, { zIndex: 50 });

            gsap.to(card, {
                duration: 0.5,
                scale: 1.1,
                rotation: isCentral ? 0 : -3, // La central recta, las otras giran
                filter: "blur(0px) grayscale(0%)",
                opacity: 1,
                boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
                ease: "back.out(1.7)", // Efecto rebote suave
                
                // Mantenemos el anclaje central si es la C-3
                xPercent: isCentral ? -50 : 0,
                overwrite: 'auto' // Evita conflictos si pasas el mouse muy rápido
            });
        });

        // -- Salida (Leave) --
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.4,
                scale: 1,
                rotation: 0,
                xPercent: isCentral ? -50 : 0, 
                boxShadow: "none", 
                ease: "power2.out",
                overwrite: 'auto',
                onComplete: () => {
                    // Al terminar, limpiamos las propiedades para que el CSS original (main.css)
                    // vuelva a aplicar sus filtros (blur, opacidad baja, etc.)
                    gsap.set(card, { zIndex: "", filter: "", opacity: "" });
                }
            });
        });
    });

    // --- 2. TEXTO TARJETA CENTRAL ---
    if (centralCard && centralText) {
        centralCard.addEventListener('mouseenter', () => {
            gsap.to(centralText, {
                duration: 0.4,
                autoAlpha: 1, 
                y: -10, 
                rotation: -6,
                ease: "power2.out"
            });
        });

        centralCard.addEventListener('mouseleave', () => {
            gsap.to(centralText, {
                duration: 0.3,
                autoAlpha: 0,
                y: 10,
                rotation: -6,
                ease: "power2.in"
            });
        });
    }

    // --- 3. FOOTER INTERACTIVO (JAM) ---
    if (jamText && footerInfo) {
        const originalHTML = footerInfo.innerHTML;

        jamText.addEventListener('mouseenter', () => {
            gsap.to(jamText, { duration: 0.3, color: "#E1251B" });
            
            // Reemplazamos el HTML
            footerInfo.innerHTML = `
                <div class="temp-info">
                    <p style="color: #E1251B">DESCUBRE</p>
                    <p>LA MAGIA</p>
                    <p>DE GSAP</p>
                    <p>EN LA WEB</p>
                </div>
            `;

            // Animación escalonada (stagger) de los nuevos párrafos
            gsap.fromTo(".temp-info p", 
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power2.out" }
            );
        });

        jamText.addEventListener('mouseleave', () => {
            gsap.to(jamText, { duration: 0.3, color: "#111" });
            
            // Sacamos el texto actual hacia arriba antes de restaurar
            gsap.to(".temp-info p", {
                y: -10,
                opacity: 0,
                duration: 0.2,
                stagger: 0.05,
                onComplete: () => {
                    footerInfo.innerHTML = originalHTML;
                    // Entrada suave del texto original
                    gsap.fromTo(footerInfo.children, {opacity: 0}, {opacity: 1, duration: 0.3});
                }
            });
        });
    }

    // --- 4. MENÚ ANIMADO ---
    if(menuLabel && menuIcon) {
        menuLabel.addEventListener('mouseenter', () => {
            gsap.to(menuLabel, { color: "#E1251B", duration: 0.3 });
            gsap.to(menuIcon, { rotation: 90, duration: 0.3, ease: "back.out" });
        });

        menuLabel.addEventListener('mouseleave', () => {
            gsap.to(menuLabel, { color: "inherit", duration: 0.3 });
            gsap.to(menuIcon, { rotation: 0, duration: 0.3 });
        });
    }

});