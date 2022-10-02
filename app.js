// movement animation

const card = document.querySelector('.card');
const container = document.querySelector('.container');

// moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `roatateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});
