let canvas;
let winScreen;
let world;
let keyboard = new Keyboard();
let pause = true;
let gameStartet = false

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    endboss = new Endboss();
}

function reload() {
    location.reload()
}

function startGame() {
    document.getElementById('startscreen').classList.add('dNone')
    gameStartet = true
    pauseGame()
}

window.addEventListener('keydown', function (e) {
    var key = e.keyCode;
    if (key === 80)// p key
    {
        pauseGame();
    }
});


function pauseGame() {
    if (gameStartet || world.endboss.energy <= 0 || world.character.energy <= 0) {
        if (!pause) {
            pause = true;
            if (world.endboss.energy > 0 && world.character.energy > 0) {
                document.getElementById('helpscreen').classList.remove('dNone');
            }
        }
        else if (pause) {
            pause = false;
            if (world.endboss.energy > 0 && world.character.energy > 0) {
                document.getElementById('helpscreen').classList.add('dNone');
            }
        }
    }
}


function openHelp() {
    document.getElementById('helpscreen').classList.remove('dNone');
}

function closeHelp() {
    document.getElementById('helpscreen').classList.add('dNone');
    pauseGame(event);
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
