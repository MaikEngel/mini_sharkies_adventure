class Coin extends MovableObject {
    height = 45;
    width = 45;

    IMAGES_IDLE = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ]

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.x = 400 + Math.random() * 1200;
        this.y = Math.random() * 400;
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE)
        }, 100);
    }
}