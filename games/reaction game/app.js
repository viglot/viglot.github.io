const containerElement = document.getElementById('container');
const scoreElement = document.getElementById('score');

let isGameOver = false;

let startTime = null;

document.body.style.background = 'red';
containerElement.style.display = 'none';

const delay = 3000 + 4000 * Math.random();
let timeouthandle = setTimeout(onTimeout, delay);

window.addEventListener('pointerdown', onWindowClicked);

function onTimeout() {
  document.body.style.background = 'lime';
  startTime = new Date();
}

function onWindowClicked() {
  if(startTime == null) {
    clearTimeout(timeoutHandle);
    const delay = 3000 + 4000 * Math.random();
    timeoutHandle = setTimeout(onTimeout, delay);
  }
  else if(isGameOver == false) {
    isGameOver = true;

    const endTime = new Date();
    const deltaTime = endTime.getTime() - startTime.getTime();
    
    scoreElement.innerHTML = deltaTime + ' ms';
    containerElement.style.display = null;
  }
}