class Poison extends MovableObject {
    height = 198 - 120;
    width = 241 - 120;
    speed = 0.25 + Math.random() * 0.1

    /**
     * Create and initialize objects from the backgroundObject class.
     * @param {number} x - The canvas horizontal coordinate to load the image.
     * @param {number} y - The canvas vertical coordinate to load the image.
     */
    constructor(x, y) {
        super().loadImage(IMAGES.WORLD.COLLECTABLE.POISON.SWIMMING[0]);
        this.loadImages(IMAGES.WORLD.COLLECTABLE.POISON.SWIMMING);
        this.loadImages(IMAGES.WORLD.COLLECTABLE.POISON.IDLE);
        this.x = x;
        this.y = y;
        this.animate()
    }


    animate() {
        setInterval(() => {
            if (!pause) {
                if (this.aboveGround()) {
                    this.poisonSink
                }
                if (this.onGround()) {
                    this.poisonLaying()
                }
            }
        }, 100);
        this.moveDown()
    }

    /**
     * Moves down the object. 
     */
    moveDown() {
        setInterval(() => {
            if (!pause) {
                if (this.y < 330) {
                    this.y += this.speed;
                }
            }
        }, 1000 / 60);
    }

    /**
     * Checks if the object is above Ground.
     * @returns - Above ground is under 330px on the y coordinate.
     */
    aboveGround() {
        return this.y < 330;
    }

    /**
     * Checks if the object is on Ground.
     * @returns - On ground is over 330px on the y coordinate.
     */
    onGround() {
        return this.y >= 330;
    }

    /**
     * Poison sinks in water.
     */
    poisonSink() {
        this.playAnimation(IMAGES.WORLD.COLLECTABLE.POISON.SWIMMING);
    }

    /**
     * Poison lays on ground.
     */
    poisonLaying() {
        this.playAnimation(IMAGES.WORLD.COLLECTABLE.POISON.IDLE);

    }
}

