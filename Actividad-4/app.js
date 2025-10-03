console.log("Actividad Jardín 4. Composición con líneas");
console.log(gsap);
console.log(lienzo);
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.beginPath();

ctx.strokeStyle ="#99e5e7ff";
ctx.lineWidth = 4;

    for (let i = 0; i < 15; i++) {
        let y = 100 + i * 20;
        let x = 50 + i * 20;
    ctx.moveTo(400 + x, 60);
    ctx.lineTo(400 + x, 60 + y);
    }

    for (let i = 0; i < 15; i++) {
        let y = 100 + i * 20;
        let x = 50 + i * 20;
    ctx.moveTo(canvas.width/2 -200 + x, 540 - y);
    ctx.lineTo(canvas.width/2 - 200 + x, 60);
    }

    for (let i = 0; i < 15; i++) {
        let y = 100 + i * 20;
    ctx.moveTo(300, 60 + y);
    ctx.lineTo(755, 60 + y);
    }

ctx.fill();
ctx.stroke();