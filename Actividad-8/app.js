console.log("Actividad Jardín 8. Boomerang");
console.log(gsap); 

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("mousedown", function () {
        gsap.to(
            ".boomerang",
            {
                y:-canvas.height+500,
                x:canvas.width,
                
                
                duration:5, //segundos
                ease:"power1.out",
                onComplete:function() {
                    gsap.to(
                        ".boomerang",
                        {
                            x:300,
                            y:canvas.height/7,
                            duration:5,
                            ease:"power1.in",
                        }
                    )
                }
            }
        );
});

const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);
 window.addEventListener("resize", function () {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderer.setSize(canvas.width, canvas.height);
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();

renderer.render(scene, camera);
});
renderer.render(scene, camera);