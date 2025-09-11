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

    for (let i = 0; i < 90; i++) {
        let x = 50 + i * 20;
    ctx.moveTo(0 + x, 60);
    ctx.lineTo(0 + x, canvas.height - 60);
    }

    for (let i = 0; i < 90; i++) {
        let y = 50 + i * 20;
    ctx.moveTo(60, 0 + y);
    ctx.lineTo(canvas.width - 60, 0 + y);
    }

ctx.fill();
ctx.stroke();