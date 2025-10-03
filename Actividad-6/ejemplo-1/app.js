console.log("Actividad Jardín 6. Op Art");
console.log(gsap);
console.log(lienzo);
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.beginPath();

ctx.strokeStyle ="#ffffff";


    for (let i = 0; i < 90; i++) {
        ctx.lineWidth = 3 + Math.sin(i * 0.5) * 3;
        let x = 70 + i * 30;
    ctx.moveTo(0 + x, 60);
    ctx.lineTo(0 + x, canvas.height - 60);
    }

    for (let i = 0; i < 90; i++) {
        ctx.lineWidth = 7 + Math.sin(i * 0.5) * 3;
        let y = 70 + i * 30;
    ctx.moveTo(60, 0 + y);
    ctx.lineTo(canvas.width - 60, 0 + y);
    }

ctx.fill();
ctx.stroke();

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