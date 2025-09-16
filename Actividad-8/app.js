console.log("Actividad Jardín 8. Boomerang");
console.log(gsap); 

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("mousedown", function () {
        gsap.to(
            ".boomerang",
            {
                y:-canvas.height,
                x:canvas.width - 200,
                
                duration:3, //segundos
                ease:"power1.out",
                onComplete:function() {
                    gsap.to(
                        ".boomerang",
                        {
                            x:0,
                            y:canvas.height,
                            duration:3,
                            ease:"power1.in",
                        }
                    )
                }
            }
        );
});