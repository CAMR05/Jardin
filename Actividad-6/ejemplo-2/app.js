console.log("Actividad Jardín 6. Op Art");
console.log(gsap);
console.log(lienzo);
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.beginPath();

ctx.strokeStyle ="#ffffff";
ctx.lineWidth = 7;

for (let i = 0; i < 60; i++) {
    const radius = 40 + i * 40
ctx.ellipse(200 + i * 30 ,canvas.height/2, 100+ i * 10 , 200 + i * 2, 0,Math.PI * 2, 0 );

ctx.fill();
ctx.stroke();}