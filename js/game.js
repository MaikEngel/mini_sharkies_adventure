let canvas;
let world;
let keyboard = new Keyboard();
let pause = false;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    endboss = new Endboss();
}

function startGame() {
    document.getElementById('startscreen').classList.add('dNone')
    init()
}


function pauseGame() {
    if (event.code == "KeyP") {
        if (!pause) {
            pause = true;
        }
        else if (pause) {
            pause = false;
        }
        console.log(pause);
    }
}

function openHelp() {
    document.getElementById('helpscreen').classList.remove('dNone')
}

function closeHelp() {
    document.getElementById('helpscreen').classList.add('dNone')
}

window.addEventListener('keydown', (event) => {
    if (event.code == "ArrowRight" || event.code == "KeyD") {
        keyboard.RIGHT = true;
    }
    if (event.code == "ArrowLeft" || event.code == "KeyA") {
        keyboard.LEFT = true;
    }
    if (event.code == "ArrowUp" || event.code == "KeyW") {
        keyboard.UP = true;
    }
    if (event.code == "ArrowDown" || event.code == "KeyS") {
        keyboard.DOWN = true;
    }
    if (event.code == "KeyC") {
        keyboard.C = true;
    }
    if (event.code == "ShiftLeft") {
        keyboard.ShiftLeft = true;
    }
    if (event.code == "Space") {
        keyboard.SPACE = true;
    }
    if (event.code == "KeyP") {
        keyboard.P = true;
}
})

window.addEventListener('keyup', (event) => {
    if (event.code == "ArrowRight" || event.code == "KeyD") {
        keyboard.RIGHT = false;
    }
    if (event.code == "ArrowLeft" || event.code == "KeyA") {
        keyboard.LEFT = false;
    }
    if (event.code == "ArrowUp" || event.code == "KeyW") {
        keyboard.UP = false;
    }
    if (event.code == "ArrowDown" || event.code == "KeyS") {
        keyboard.DOWN = false;
    }
    if (event.code == "KeyC") {
        keyboard.C = false;
    }
    if (event.code == "ShiftLeft") {
        keyboard.ShiftLeft = false;

    }
    if (event.code == "Space") {
        keyboard.SPACE = false;
    }
    if (event.code == "KeyP") {
        keyboard.P = false;
}
});
