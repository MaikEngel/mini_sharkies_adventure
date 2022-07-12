class World {
    level = level1
    character = new Character();
    statusbar = new Statusbar();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    background_music = new Audio('audio/backgroundmusic.mp3');
    throwableObject = [];
    checkBubble = false;
    coolDownSlap = false
    coolDownBubble = false;
    dead = false;

    invulnerable = false;

    holdbubbleAttack = false;
    holdSlapAttack = false

    bubbleAttack = false;




    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
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
        this.addObjectsToMap(this.throwableObject) // draws poison

        this.addToMap(this.character); // draws the character
        this.addObjectsToMap(this.level.enemies) // draws the enemies

        this.addToMap(this.level.light); // draws the light

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbar); // draws lifebar
        this.ctx.translate(this.camera_x, 0);


        this.ctx.translate(-this.camera_x, 0);

        let self = this; // with requestAnimationFrame draw() starts consistently 
        requestAnimationFrame(function () {
            self.draw();
        });

    }

    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThowobjects();
            this.checkCollisionCoin();
            this.checkCollisionPoison()
        }, 1000 / 25);
    }

    checkThowobjects() {
        if (this.dead == true) {
            return false;
        } else {
            if (this.character.world.keyboard.C == true && this.coolDownBubble == false && this.bubbleAttack == false) {
                this.bubbleAttack = true;
                this.coolDownBubble = true;
                setTimeout(() => {
                    this.bubbleAttack = false;
                }, 500);
                setTimeout(() => {
                    let bubble = new ThrowableObject(this.character.x + 150, this.character.y + 130)
                    this.throwableObject.push(bubble);
                    setTimeout(() => {
                        this.coolDownBubble = false;
                    }, 1100);

                }, 1100);
            }
        }
    }

    checkCollision() {
        this.level.enemies.forEach((enemy, i) => {
            if (this.dead == true) {
                return true;
            } else {
                if (this.holdSlapAttack == false && this.character.isColliding(enemy) && this.invulnerable == false) {
                    this.invulnerable = true;
                    this.character.hit();
                    this.statusbar.hit();
                    setTimeout(() => {
                        this.invulnerable = false;
                    }, 1000);
                }
                if (this.holdSlapAttack == true && this.character.isColliding(enemy)) {
                        this.level.enemies.splice(i, 1)
                }
            }
        });
    }

    checkCollisionCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.dead == true) {
                return true;
            } else {
                if (this.character.isColliding(coin)) {
                    this.character.collectCoin();
                    this.level.coins.splice(index, 1);

                }
                if (this.COINS >= 10) {
                    console.log('Power Up')
                }
            }
        });
    }

    checkCollisionPoison() {
        this.level.poisons.forEach((poison, index) => {
            if (this.dead == true) {
                return true;
            } else {
                if (this.character.isColliding(poison)) {
                    this.character.collectPoison()
                    this.level.poisons.splice(index, 1)
                    console.log(this.POISON);
                }
            }
        });
    }

    addObjectsToMap(objects) { // to simplify forEach function
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            mo.flipImage(this.ctx);
        }

        mo.draw(this.ctx);


        if (mo.otherDirection) {
            mo.flipImageBack(this.ctx);
        }
    }
}