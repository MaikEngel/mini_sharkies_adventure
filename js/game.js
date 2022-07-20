let canvas;
let winScreen;
let world;
let keyboard = new Keyboard();
let pause = true;
let gameStartet = false


/**
 *  Initialized the game.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    endboss = new Endboss();
}


/**
 * Reloads the game.
 */
function reload() {
    location.reload()
}


/**
 * Starts the game.
 */
function startGame() {
    document.getElementById('startscreen').classList.add('dNone');
    document.getElementById('canvas').classList.remove('dNone');
    gameStartet = true;
    pauseGame();
}


/**
 * Pause the game by pressing P.
 */
window.addEventListener('keydown', function (e) {
    var key = e.keyCode;
    if (key === 80)// p key
    {
        pauseGame();
    }
});


/**
 * Pause the game and open the help screen.
 */
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


/**
 * Open the help screen.
 */
function openHelp() {
    document.getElementById('helpscreen').classList.remove('dNone');
}


/**
 * Close the help screen.
 */
function closeHelp() {
    document.getElementById('helpscreen').classList.add('dNone');
    pauseGame(event);
}


/**
 * Checks which key is pressed.
 */
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

/**
 * Checks which key was pressed.
 */
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
