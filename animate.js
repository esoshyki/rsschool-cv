// Initial Data
const fps = 100; // frames per second
const arcPart = 2*Math.PI / fps;   // parts of drawing arc in one interval in radians
const timeDelay = 600; // duration of animation in ms
const interval = timeDelay / fps; 
let startAngle = 0;
let nextAngle = startAngle + arcPart;

const draw = (context, curAng, nextAng) => {
    context.strokeStyle="yellowgreen";
    context.lineWidth = 4;
    context.arc(35, 35, 33, curAng, nextAng);
    context.stroke();
}

const remove = (el) => {
    const ctx = el.getContext('2d');
    ctx.clearRect(0,0, 70, 70)
}

const handler = (e) => {
    const canv = e.target
    const ctx = canv.getContext('2d');
    ctx.beginPath();
    draw(ctx, startAngle, nextAngle);
    const timer = () => {
        remove(canv);
        startAngle += arcPart; nextAngle += arcPart;
        draw(ctx, startAngle, nextAngle);
    }

    const animate = setInterval(timer, interval);

    canv.addEventListener('mouseout', () => {
        clearInterval(animate);
        remove(canv);
        startAngle = 0;
        nextAngle = startAngle + arcPart;
    })

    setTimeout(() => {
        clearInterval(animate)}, timeDelay)
}

document.querySelectorAll('.icons_animate').forEach(el => {el.addEventListener('mouseover', handler)})
