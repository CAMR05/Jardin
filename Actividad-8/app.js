console.log("Actividad Jardín 8. Boomerang");
console.log(gsap); 

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("mousedown", function () {
        gsap.to(
            ".boomerang",
            {
                y:-900,
                x:innerWidth/2,
                
                duration:3, //segundos
                ease:"power1.out",
                onComplete:function() {
                    gsap.to(
                        ".boomerang",
                        {
                            x:6700,
                            y:80,
                            duration:3,
                            ease:"power1.in",
                        }
                    )
                }
            }
        );
});