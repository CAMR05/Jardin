console.log("Actividad Jardín 9. Posciones Randoms");
console.log(gsap); 

const canvas = document.getElementById("lienzo");
canvas.width = window.objWidth;
canvas.height = window.objHeight;


window.addEventListener("mousedown", function () {
    const objeto = this.document.querySelector(".objeto");
    const objWidth = 300;
    const objHeight = 50;

    /*const offsetX = objWidth * 1;
    const offsetY = objHeight * 0.9;*/

    const maxX = window.innerWidth - objWidth;
    const maxY = window.innerHeight - objHeight;

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