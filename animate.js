const draw = (el, curRect, nextRect) => {
    const ctx = el.getContext('2d');
    ctx.strokeStyle="yellowgreen";
    ctx.lineWidth = 4;
    ctx.arc(35, 35, 33, 0, 2*Math.PI);
    ctx.stroke();
}

const remove = (el) => {
    const ctx = el.getContext('2d');
    ctx.clearRect(0,0, 70, 70)
}

const handler = (e) => {
    const canv = e.target
    draw(canv, 0, 2*Math.PI)
}

const remover = (e) => {
    const canv = e.target
    remove(canv)
}

document.querySelectorAll('.icons_animate').forEach(el => {el.addEventListener('mouseover', handler)})
document.querySelectorAll('.icons_animate').forEach(el => {el.addEventListener('mouseout', remover)})