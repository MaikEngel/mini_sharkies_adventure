class World {
    bossFight = new Audio(AUDIOS.BACKGROUND.BOSS_THEME.AUDIO);
    theme = new Audio(AUDIOS.BACKGROUND.THEME.AUDIO);
    swim_sound = new Audio(AUDIOS.CHARACTER.SWIMMING.AUDIO);
    slap = new Audio(AUDIOS.CHARACTER.SLAP.AUDIO);
    bubble_sound = new Audio(AUDIOS.CHARACTER.BUBBLE.AUDIO);
    collect_coin_sound = new Audio(AUDIOS.WORLD.COINS.AUDIO);
    collect_poison_sound = new Audio(AUDIOS.WORLD.POISON.AUDIO);
    damage_sound = new Audio(AUDIOS.CHARACTER.HURT.AUDIO);
    heal_sound = new Audio(AUDIOS.WORLD.HEART.AUDIO);
    powerup_sound = new Audio(AUDIOS.WORLD.POWERUP.AUDIO);
    win_sound = new Audio(AUDIOS.WORLD.WIN.AUDIO);
    lose_sound = new Audio(AUDIOS.WORLD.LOSE.AUDIO);

    level = level1
    character = new Character();
    endboss = this.level.enemies.find(e => e instanceof Endboss);
    statusbar = new Statusbar();
    coinbar = new Coinbar();
    poisonbar = new Poisonbar();
    statusbarEndboss = new StatusbarEndboss();

    firstContact = false;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwableObject = [];
    coolDownSlap = false
    coolDownBubble = false;
    dead = false;
    invulnerable = false;
    invulnerableBoss = false;
    holdbubbleAttack = false;
    holdSlapAttack = false
    bubbleAttack = false;
    spawn = false;
    j = 0;



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
        this.statusbarEndboss.world = this;
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
        this.addToMap(this.statusbar); // draws lifebarnew StatusbarEndboss()
        this.addToMap(this.coinbar); // draws coinbar
        this.addToMap(this.poisonbar); // draws poisonbar
        this.addToMap(this.statusbarEndboss); // draws lifebarnew StatusbarEndboss()
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        let self = this; // with requestAnimationFrame draw() starts consistently 
        requestAnimationFrame(function () {
            self.draw();
        });

    }

    run() {
        setInterval(() => {
            if (!pause) {
                this.checkThrowobjects();
                this.checkCollisionCoin();
                this.checkCollisionPoison();
                this.checkCollisionHeart();
                this.checkCharacterPosition();
                this.checkSlap();
                this.checkBubble();
                this.theme.volume = AUDIOS.BACKGROUND.THEME.VOLUME;
                if (!this.spawn) {
                    this.theme.play();
                }
                this.checkCollision();
            }
            if (pause) {
                this.bossFight.pause();
                this.theme.pause();
            }
        }, 1000 / 60);
    }

    checkThrowobjects() {
        if (this.dead == true) {
            return false;
        } else {
            if (this.character.world.keyboard.C == true && this.coolDownBubble == false && this.bubbleAttack == false && this.character.poison > 0) {
                this.bubbleAttack = true;
                this.coolDownBubble = true;

                setTimeout(() => {
                    this.bubble_sound.play()
                    this.bubbleAttack = false;
                }, 500);
                setTimeout(() => {
                    let bubble = new ThrowableObject(this.character.x + 150, this.character.y + 130)
                    this.throwableObject.push(bubble);
                    this.poisonbar.losePoison();
                    this.character.losePoison();
                    setTimeout(() => {
                        this.coolDownBubble = false;
                        this.j++
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
                    this.damage_sound.play()
                    this.character.hit();
                    this.statusbar.hit();
                    this.character.loseCoin();
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
                        return true;
                    } else {
                        this.level.enemies.splice(i, 1)
                    }
                }
            }
        })
    }

    checkBubble() {
        this.throwableObject.forEach(bubble => {

            this.level.enemies.forEach((enemy, i) => {
                if (this.dead == true) {
                    return true;
                } else {
                    if (this.throwableObject.length > 0 && bubble.isColliding(enemy)) {
                        if ((enemy instanceof Endboss && this.invulnerableBoss == false)) {
                            this.invulnerableBoss = true;
                            this.endboss.hit();
                            this.statusbarEndboss.hit();
                            if (this.character.morePower == true) {
                                this.endboss.hit();
                                this.statusbarEndboss.hit();
                            }
                            setTimeout(() => {
                                this.invulnerableBoss = false;
                            }, 3000);
                        } if (enemy instanceof Enemy || enemy instanceof StandingEnemy) {
                            this.level.enemies.splice(i, 1)
                        }
                    }
                }
            })
        });
    }


    checkCollisionCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.dead == true) {
                return true;
            } else {
                if (this.character.isColliding(coin)) {
                    this.collect_coin_sound.pause();
                    this.collect_coin_sound.currentTime = 0;
                    this.collect_coin_sound.play();
                    this.coinbar.collectCoin();
                    this.character.collectCoin();
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
                    this.heal_sound.pause();
                    this.heal_sound.currentTime = 0;
                    this.heal_sound.play();
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
                    this.collect_poison_sound.pause();
                    this.collect_poison_sound.currentTime = 0;
                    this.collect_poison_sound.play();
                    this.poisonbar.collectPoison();
                    this.character.collectPoison();
                    this.level.poisons.splice(index, 1);
                }
            }
        });
    }

    checkCharacterPosition() {
        if (this.character.x > 1701 && !pause) {
            this.theme.pause();
            this.bossFight.play();
            this.bossFight.volume = AUDIOS.BACKGROUND.BOSS_THEME.VOLUME;
            this.spawn = true;
            this.endboss.bossSpawned = true;
            this.level.level_start_x = 1700;
            this.level.level_end_x = 1720;
            setTimeout(() => {
                this.level.level_end_x = 1950;
            }, 1800);
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