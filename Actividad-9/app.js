console.log("Actividad Jardín 9. Posciones Randoms");
console.log(gsap); 

const canvas = document.getElementById("lienzo");
canvas.width = window.objWidth;
canvas.height = window.objHeight;


window.addEventListener("mousedown", function () {
    const randomX = Math.random() * window.objWidth;
    const randomY = Math.random() * window.objHeight;
        gsap.to(
            ".objeto",
            {
                x:randomX,
                y:randomY,
                
                
                duration:1, //segundos
                ease:"power1.out",
                onComplete:function() {
                }
            }
        );
});