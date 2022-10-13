
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var light = document.getElementById("light");

let xPlayer = 1;
let yPlayer = 1;

let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1,],
  [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1,],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1,],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1,],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1,],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1,],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1,],
  [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1,],
  [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1,],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1,],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1,],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
]


function repaint() {

  context.clearRect(0, 0, canvas.width, canvas.height)

  for (let j = 0; j < map.length; j++) {
    for (let i = 0; i < map[0].length; i++) {
      if (map[j][i] === 1) {
        context.fillStyle = "rgb(0,0,0)"
        context.fillRect(i * 40, j * 40, 40, 40);
      }

      else if (map[j][i] === 2) {

        context.fillStyle = "rgb(0,255,0)"
        context.fillRect(i * 40, j * 40, 40, 40)
      }
    }
  }

  context.fillStyle = "rgb(255,0,0"
  context.fillRect(xPlayer * 40 + 10, yPlayer * 40 + 10, 20, 20)
}


function keyDown(e) {
  switch (e.keyCode) {
    case 65:
      if (map[yPlayer][xPlayer - 1] === 0) {
        xPlayer--;
        light--;
      }
      break;
    case 87:
      if (map[yPlayer - 1][xPlayer] === 0) {
        yPlayer--;
      }
      break;
    case 68:
      if (map[yPlayer][xPlayer + 1] === 0) {
        xPlayer++;
      }
      break;
    case 83:
      if (map[yPlayer + 1][xPlayer] === 0 || map[yPlayer + 1][xPlayer] === 2) {
        yPlayer++;
        if(map[yPlayer][xPlayer] === map[13][1]) {
          alert("You won")
        }
      }
      break;
  }
}

function gameLoop() {
  repaint();
  requestAnimationFrame(gameLoop);
}


gameLoop();
window.addEventListener('keydown', keyDown); 

