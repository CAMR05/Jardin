console.log("Actividad Jardín 3. Autorretrato");
console.log(gsap);

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Creamos nuestros elementos básicos:
//Escena

window.addEventListener("mousedown", function () {
        gsap.to(
            ".rostro",
            {
                y:innerHeight/2,
                x:innerWidth/2,
                
                duration:3, //segundos
                ease:"power1.out",
            }
        );
});