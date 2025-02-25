import { Ball } from "./Modules/Ball.js";
import { loadCanvas } from "./Modules/windowEvents.js";

const canvas = document.querySelector(".geometryDash");
const ctx = canvas.getContext("2d");
loadCanvas(canvas);

const particleNum = 20;
let particleArray = [];

for (let i = 0; i < particleNum; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 20 + 5;
    let color = "red";
    let velx = Math.random() * 2;
    let vely = Math.random() * 2;
    particleArray.push(new Ball(x,y,color,size,velx,vely));
};



function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particleArray.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x,particle.y,particle.size,0,Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        particle.animate(canvas);
    });

    
    requestAnimationFrame(animate);
    

}
requestAnimationFrame(animate);



// Window Events
window.addEventListener("resize", () => {
    loadCanvas(canvas);
});