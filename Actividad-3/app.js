console.log("Actividad Jardín 3. Autorretrato");
console.log(gsap);

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Creamos nuestros elementos básicos:
//Escena

window.addEventListener("mousedown", function () {
        gsap.to(
            ".cabeza",
            {
                y:innerHeight/2,
                x:innerWidth/2,
                
                duration:3, //segundos
                ease:"power1.out",
            });
        gsap.to(
            ".lentes",
            {
                y:innerHeight/2 -20,
                x:-80,

                 duration:3, //segundos
                ease:"power1.out",
            });
        gsap.to(
            ".ceja1",
            {
                rotation: -10, // grados (negativo para rotar hacia arriba)
                y:innerHeight/2 -60,
                x:-30,

                    duration:3, //segundos
                ease:"power1.out",
            });
            gsap.to(
            ".ceja2",
            {
                y:innerHeight/2 -40,
                x:-290,

                    duration:3, //segundos
                ease:"power1.out",
            });
    }
        );