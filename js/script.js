const mario = document.querySelector('.mario');

const jump = () => {
  // adicionando uma nova classe
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500); //500ms
};

document.addEventListener('keydown', jump);