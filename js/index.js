var audio = new Audio('../audio/pudj.mp3');
var btn = document.querySelector('#btn-no');
const field = document.querySelector('.field');
const close = document.querySelector('#close');
const popup = document.querySelector('.popup');

const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand)
}

close.addEventListener('click', () => {
    popup.classList.add('closed')
    field.classList.add("shown");
})

btn.addEventListener('mouseenter', () => {
    audio.pause();
    audio.currentTime = 0;
    btn.style.top = `${random(0, 90)}%`;
    btn.style.left = `${random(0, 90)}%`;
    audio.play();
})

btn.addEventListener('click', () => {
    alert('Иди нахуй.')
})