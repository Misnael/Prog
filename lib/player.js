import { getKey } from "./inputinput.js"

const gravity = 0.69;

let x = 0;
let y = 0;
let width = 40;
let height = 40;

let vy = 0;

let color = 'Purple';

export function updatePlayer() {
    if(getKey(38)) {
        console.log("Unpog")
    }

    vy += gravity;
    y += vy;

    if(y > 450 - height) {
        y = 450 - height;
        vy = 0;
    }
}


/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */
export function drawPlayer(context) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}