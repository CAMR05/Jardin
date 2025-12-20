// Esperamos a que todo el contenido cargue
document.addEventListener('DOMContentLoaded', () => {

    // --- SELECCIÓN DE ELEMENTOS ---
    const cards = document.querySelectorAll('.card');
    const centralCard = document.querySelector('.c-3');
    const centralText = document.querySelector('.c-text');
    const jamText = document.querySelector('.footer .big-text:first-child');
    const footerInfo = document.querySelector('.info');
    const menuIcon = document.querySelector('.menu-icon');

    // --- 1. CONFIGURACIÓN INICIAL (ESTADOS POR DEFECTO) ---
    
    // Ocultamos el texto de la tarjeta central inicialmente
    if(centralText) {
        centralText.style.opacity = '0';
        centralText.style.transition = 'all 0.4s ease'; // Suavizamos la aparición
    }

    // --- 2. LÓGICA PARA LAS TARJETAS (CARDS) ---
    
    cards.forEach(card => {
        // Guardamos el z-index original por si acaso, aunque lo manejaremos dinámicamente
        
        card.addEventListener('mouseenter', () => {
            // a) Cambios visuales generales
            card.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"; // Efecto rebote suave
            card.style.cursor = "pointer";
            card.style.zIndex = "50"; // Traer al frente
            card.style.filter = "blur(0px) grayscale(0%)"; // Quitar blur y blanco/negro si hubiera
            card.style.opacity = "1"; // Quitar transparencia
            card.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";

            // b) Manejo especial para la tarjeta central (C-3)
            // La C-3 tiene un 'translateX(-50%)' en CSS para centrarse. 
            // Si solo aplicamos scale, perderemos el centrado.
            if (card.classList.contains('c-3')) {
                card.style.transform = "translateX(-50%) scale(1.1)";
            } else {
                card.style.transform = "scale(1.1) rotate(-2deg)";
            }
        });

        card.addEventListener('mouseleave', () => {
            // RESTAURAR ESTADO ORIGINAL
            // Al dejar las propiedades vacías (""), el navegador vuelve a leer el archivo CSS
            card.style.zIndex = ""; 
            card.style.filter = ""; 
            card.style.opacity = ""; 
            card.style.boxShadow = ""; 
            card.style.transform = ""; // Esto devolverá el translateX(-50%) a la C-3 gracias al CSS original
        });
    });

    // --- 3. TEXTO QUE APARECE Y DESAPARECE (TARJETA CENTRAL) ---
    
    if (centralCard && centralText) {
        centralCard.addEventListener('mouseenter', () => {
            centralText.style.opacity = '1';
            centralText.style.transform = "translateY(-10px) rotate(-6deg)"; // Sube un poco
        });

        centralCard.addEventListener('mouseleave', () => {
            centralText.style.opacity = '0';
            centralText.style.transform = "translateY(0) rotate(-6deg)";
        });
    }

    // --- 4. INTERACCIÓN EXTRA EN EL FOOTER ---
    
    if (jamText && footerInfo) {
        // Guardamos el HTML original para restaurarlo luego
        const originalInfoHTML = footerInfo.innerHTML;

        jamText.addEventListener('mouseenter', () => {
            jamText.style.color = "#E1251B"; // Color rojo
            jamText.style.cursor = "help";
            
            // Cambiamos el texto de información dinámicamente
            footerInfo.innerHTML = `
                <p style="color: #E1251B">¡HOLA!</p>
                <p>ESTO ES JS</p>
                <p>INTERACTIVO</p>
                <p>EN ACCIÓN</p>
            `;
        });

        jamText.addEventListener('mouseleave', () => {
            jamText.style.color = "#111"; // Volver a negro
            footerInfo.innerHTML = originalInfoHTML; // Restaurar texto original
        });
    }

    // --- 5. PEQUEÑO DETALLE EN EL MENÚ ---
    if(menuIcon) {
        menuIcon.parentElement.addEventListener('mouseenter', () => {
            menuIcon.style.color = "#E1251B";
            menuIcon.innerText = "▶"; // Cambia el cuadrado por un triángulo
        });
        menuIcon.parentElement.addEventListener('mouseleave', () => {
            menuIcon.style.color = "inherit";
            menuIcon.innerText = "■"; // Vuelve al cuadrado
        });
    }

});