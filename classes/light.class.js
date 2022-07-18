class Light extends MovableObject {
    y = 0;
    x = 600 + Math.random() * 500;
    height = 1500;
    width = 600;
    speed = 0.01;


    constructor() {
        super().loadImage(IMAGES.WORLD.LIGHT);
        this.animate();
    }


    animate() {
            this.moveLeft()
    }
}