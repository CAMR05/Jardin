console.log("Actividad Jardín 9. Posciones Randoms");
console.log(gsap); 

const canvas = document.getElementById("lienzo");
canvas.width = window.objWidth;
canvas.height = window.objHeight;


window.addEventListener("mousedown", function () {
    const objeto = this.document.querySelector(".objeto");
    const objWidth = objeto.offsetWidth || 300;
    const objHeight = objeto.offsetHeight || 50;

    const maxX = this.window.innerWidth - objWidth;
    const maxY = this.window.innerHeight - objHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
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