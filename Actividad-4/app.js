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

ctx.moveTo(100, 60);
ctx.lineTo(100, 700);




//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);

ctx.fill();
ctx.stroke();

window.addEventListener("mousedown", function () {
        gsap.to(
            ".edificios",
            {
                y:innerHeight/2,
                x:innerWidth/2,
                
                duration:3, //segundos
                ease:"power1.out",
            });
    }
        );