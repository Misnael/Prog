import { update as updatesnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import {  update as updateFood, draw as drawFood  } from './food.js'
import { outsideGrid } from './grid.js'
let lastRenderTime = 0;
let ganeOver = false
const gameBoard = document.getElementById('game-board')


function main(currentTime)  {
    if (gamevOver)  {
        return alert('You Loose Lmao')
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastReender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastReender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updatesnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}