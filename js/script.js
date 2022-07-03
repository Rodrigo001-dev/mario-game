const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  // adicionando uma nova classe
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500); //500ms
};

const loop = setInterval(() => {
  
  // acessando o deslocamento esquerdo do pipe
  const pipePosition = pipe.offsetLeft;
  // o + serve para converter para um numero
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { // 120px 80px
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop);
  }

}, 10); // 10ms

document.addEventListener('keydown', jump);