class World {
    level = level1
    character = new Character();
    endboss = this.level.enemies.find(e => e instanceof Endboss);
    statusbar = new Statusbar();
    coinbar = new Coinbar();
    poisonbar = new Poisonbar();

    firstContact = false;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    background_music = new Audio('audio/backgroundmusic.mp3');
    throwableObject = [] ;
    coolDownSlap = false
    coolDownBubble = false;
    dead = false;

    invulnerable = false;

    holdbubbleAttack = false;
    holdSlapAttack = false

    bubbleAttack = false;

    spawn = false;

    j = 0;


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
        this.endboss.world = this;
    }
    



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  // clears the canvas, otherwise charakter and enemies would double after every move.

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects) // draws the background
        this.addObjectsToMap(this.level.coins) // draws coins
        this.addObjectsToMap(this.level.coins) // draws coins

        this.addObjectsToMap(this.level.poisons) // draws poison
        this.addObjectsToMap(this.throwableObject) // draws poison

        this.addToMap(this.character); // draws the character
        this.addObjectsToMap(this.level.heart); // draws the character

        this.addObjectsToMap(this.level.enemies) // draws the enemies

        this.addToMap(this.level.light); // draws the light

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbar); // draws lifebar
        this.addToMap(this.coinbar); // draws coinbar
        this.addToMap(this.poisonbar); // draws poisonbar


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
            this.checkThrowobjects();
            this.checkCollisionCoin();
            this.checkCollisionPoison();
            this.checkCollisionHeart()
            this.checkCharacterPosition()
            this.checkSlap()
            this.checkBubble()
        }, 1000 / 25);
    }

    checkThrowobjects() {
        if (this.dead == true) {
            return false;
        } else {
            if (this.character.world.keyboard.C == true && this.coolDownBubble == false && this.bubbleAttack == false && this.character.poison > 0) {
                this.bubbleAttack = true;
                this.coolDownBubble = true;
                setTimeout(() => {
                    this.bubbleAttack = false;
                }, 500);
                setTimeout(() => {
                    let bubble = new ThrowableObject(this.character.x + 150, this.character.y + 130)
                    this.throwableObject.push(bubble);
                    console.log(this.throwableObject)
                    this.poisonbar.losePoison();
                    this.character.losePoison();
                    setTimeout(() => {
                        this.coolDownBubble = false;
                    }, 1100);
                }, 1100);
            }
        }
    }

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.dead == true) {
                return true;
            } else {
                if (this.holdSlapAttack == false && this.character.isColliding(enemy) && this.invulnerable == false) {
                    this.invulnerable = true;
                    this.character.hit();
                    this.statusbar.hit();
                    this.coinbar.loseCoin();
                    setTimeout(() => {
                        this.invulnerable = false;
                    }, 1000);
                }

            }
        })
    }



    checkSlap() {
        this.level.enemies.forEach((enemy, i) => {
            if (this.dead == true) {
                return true;
            } else {
                if (this.holdSlapAttack == true && this.character.isColliding(enemy)) {
                    if ((enemy instanceof Endboss)) {
                        return true
                    } else {
                        this.level.enemies.splice(i, 1)
                    }
                }
            }
        })
    }

    checkBubble() {
        
        this.level.enemies.forEach((enemy, i) => {
            if (this.dead == true) {
                return true;
            } else {
                if (this.throwableObject.length > 0 && this.throwableObject[this.j].isColliding(enemy)) {
                    if ((enemy instanceof Endboss)) {
                        this.endboss.hit();
                        console.log(this.endboss.energy)
                        this.j++
                    } else {
                        this.level.enemies.splice(i, 1)
                        this.j++
                    }
                }
            }
        })
    }

    checkCollisionCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.dead == true) {
                return true;
            } else {
                if (this.character.isColliding(coin)) {
                    this.coinbar.collectCoin();
                    this.level.coins.splice(index, 1);
                }
            }
        });
    }

    checkCollisionHeart() {
        this.level.heart.forEach((heart, index) => {
            if (this.dead == true) {
                return true;
            } else {
                if (this.character.isColliding(heart)) {
                    this.character.collectHeart();
                    this.statusbar.collectHeart();
                    this.level.heart.splice(index, 1);
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
                    this.poisonbar.collectPoison();
                    this.character.collectPoison();
                    this.level.poisons.splice(index, 1);
                }
            }
        });
    }

    checkCharacterPosition() {
        if (this.character.x > 1750) {
            this.spawn = true;
        }
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