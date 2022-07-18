class Poison extends MovableObject {
    height = 198 - 120;
    width = 241 - 120;
    speed = 0.25 + Math.random() * 0.1


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


    moveDown() {
        setInterval(() => {
            if (!pause) {
                if (this.y < 330) {
                    this.y += this.speed;
                }
            }
        }, 1000 / 60);
    }

    
    aboveGround() {
        return this.y < 330;
    }

    
    onGround() {
        return this.y >= 330;
    }

    
    poisonSink() {
        this.playAnimation(IMAGES.WORLD.COLLECTABLE.POISON.SWIMMING);
    }

    
    poisonLaying() {
        this.playAnimation(IMAGES.WORLD.COLLECTABLE.POISON.IDLE);

    }
}

