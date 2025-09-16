console.log("Actividad Jardín 9. Posciones Randoms");
console.log(gsap); 

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("mousedown", function () {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
        gsap.to(
            ".boomerang",
            {
                y:randomX,
                x:randomX,
                
                
                duration:2, //segundos
                ease:"power1.out",
                onComplete:function() {
                }
            }
        );
});