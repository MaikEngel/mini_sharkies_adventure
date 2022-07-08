let canvas;
let world;
let keyboard = new Keyboard();
let timeoutC = 600;
let timeoutSpace = 580;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (event) => {
    if(event.code == "ArrowRight" || event.code == "KeyD") {
        keyboard.RIGHT = true;
    }
    if(event.code == "ArrowLeft" || event.code == "KeyA") {
        keyboard.LEFT = true;
    }
    if(event.code == "ArrowUp" || event.code == "KeyW") {
        keyboard.UP = true;
    }
    if(event.code == "ArrowDown" || event.code == "KeyS") {
        keyboard.DOWN = true;
    }
    if(event.code == "KeyC") {
        timeoutC = 600;
        keyboard.C = true;
    }
    if(event.code == "ShiftLeft") {
        keyboard.ShiftLeft = true;
    }
    if(event.code == "Space") {
        keyboard.SPACE = true;
    }
})

window.addEventListener('keyup', (event) => {
    if(event.code == "ArrowRight" || event.code == "KeyD") {
        keyboard.RIGHT = false;
    }
    if(event.code == "ArrowLeft" || event.code == "KeyA") {
        keyboard.LEFT = false;
    }
    if(event.code == "ArrowUp" || event.code == "KeyW") {
        keyboard.UP = false;
    }
    if(event.code == "ArrowDown" || event.code == "KeyS") {
        keyboard.DOWN = false;
    }
    if(event.code == "KeyC") {
        setTimeout(() => {
            keyboard.C = false;
        }, timeoutC);
    }
    if(event.code == "ShiftLeft") {
        keyboard.ShiftLeft = false;
        
    }
    if(event.code == "Space") {
        setTimeout(() => {
        keyboard.SPACE = false;
    }, timeoutSpace);
    }
});
