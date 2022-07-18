class Heart extends MovableObject {
    height = 45;
    width = 45;


    constructor(x, y) {
        super().loadImage(IMAGES.WORLD.COLLECTABLE.HEARTS.IDLE[0]);
        this.loadImages(IMAGES.WORLD.COLLECTABLE.HEARTS.IDLE);
        this.x = x
        this.y = y
        this.animate()
    }

    
    animate() {
        setInterval(() => {
            if (!pause) {
                this.playAnimation(IMAGES.WORLD.COLLECTABLE.HEARTS.IDLE);
            }
        }, 100);
    }
}