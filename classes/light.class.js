class Light extends MovableObject {
    y = 0;
    height = 1500;
    width = 600;
    speed = 0.01;

    constructor() {
        super().loadImage('img/3. Background/Legacy/Layers/1. Light/3.png');

        this.x = 600 + Math.random() * 500;
        this.animate();
    }
    animate() {
        this.moveLeft()
    }
}