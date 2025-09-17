console.log("Actividad Jardín 9. Posciones Randoms");
console.log(gsap); 

const canvas = document.getElementById("lienzo");
canvas.width = window.objWidth;
canvas.height = window.objHeight;


window.addEventListener("mousedown", function () {
    const objeto = this.document.querySelector(".objeto");
    const objWidth = 300;
    const objHeight = 50;

    const offsetX = objWidth * 0.8;
    const offsetY = objHeight * 0.7;

    const maxX = this.window.innerWidth - objWidth - offsetX;
    const maxY = this.window.innerHeight - objHeight - offsetY;

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