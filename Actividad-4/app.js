console.log("Actividad Jardín 4. Composición con líneas");
console.log(gsap);
console.log(lienzo);
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.beginPath();

ctx.strokeStyle ="#4b4b4bff";
ctx.lineWidth = 4;

for (let i = 0; i < 11; i++) {
    let y = 100 + i * 40;
    let x = 50 + i * 20;
ctx.moveTo(100 + x, 60);
ctx.lineTo(100 + x, 60 + y);

}




ctx.fill();
ctx.stroke();