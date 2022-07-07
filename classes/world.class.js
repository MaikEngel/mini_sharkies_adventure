class World {
    level = level1
    character = new Character();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    background_music = new Audio('audio/backgroundmusic.mp3')



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        // this.backgroundMusic()
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  // clears the canvas, otherwise charakter and enemies would double after every move.

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects) // draws the background
        this.addObjectsToMap(this.level.coins) // draws coins
        this.addObjectsToMap(this.level.poisons) // draws poison
        this.addToMap(this.character); // draws the character
        this.addObjectsToMap(this.level.enemies) // draws the enemies
        this.addToMap(this.level.light); // draws the light



        this.ctx.translate(-this.camera_x, 0);

        let self = this; // with requestAnimationFrame draw() starts consistently 
        requestAnimationFrame(function () {
            self.draw();
        });

    }

    addObjectsToMap(objects) { // to simplify forEach function
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 1);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}