let canvas = document.querySelector("#mainCanvas");
let context = canvas.getContext("2d");

let x = 0;
let y = 0;

let fps = 10;
let tileSize = 20;

let xSpeed = 10;
let ySpeed = 0;

snakeLength = 15;

let snakeBody = [
  {
    x: 200,
    y: 200,
  }
];

function snakeDraw() {
  canvas.width = canvas.width;
  context.fillStyle = "#4e4e4e";

  for(let tile of snakeBody) {
    context.fillRect(tile.x, tile.y, tileSize, tileSize);
  }

  //move snake 
  let headPos = snakeBody[snakeBody.length - 1];
  let newHead = {};

  newHead.x = headPos.x + xSpeed;
  newHead.y = headPos.y + ySpeed;

  //remove 
  while(snakeBody.length > snakeLength) {
    snakeBody.shift()
  }

  if((headPos.x && headPos.y) >= snakeBody.length ) {
    resetGame();
  }

  // x += xSpeed;
  // y += ySpeed;

  if(newHead.x >= canvas.width) {
    newHead.x = 0;
  } ;
  if (newHead.x < 0) {
    newHead.x = canvas.width;
  };
  if (newHead.y >= canvas.height) {
    newHead.y = 0;
  };
  if(newHead.y < 0) {
    newHead.y = canvas.height;
  };

  snakeBody.push(newHead);
};

function resetGame() {
  y= 250;
  x= 250;
}

//setInterval(snakeDraw, 1000/fps);

//Kaller på en function på riktig tidspunkt, 60fps
//window.requestAnimationFrame(draw)

window.addEventListener("keydown", (event) => {
 if(event.code == 'ArrowLeft') {
   xSpeed = -tileSize;
   ySpeed = 0;
 };
 if(event.code == "ArrowRight") {
   xSpeed = tileSize;
   ySpeed = 0;
 };
 if(event.code == "ArrowUp") {
   ySpeed = -tileSize;
   xSpeed = 0;
 };
 if(event.code == "ArrowDown") {
  ySpeed = tileSize;
  xSpeed = 0;
};
console.log(event.code);
});
