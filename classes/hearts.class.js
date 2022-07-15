class Heart extends MovableObject {
    height = 45;
    width = 45;

    IMAGES_IDLE = [
        'img/4. Marcadores/green/100_  copia 3.png',
    ]

    constructor(x, y) {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.x = x
        this.y = y
        this.animate()
    }

    animate() {
        setInterval(() => {
            if (!pause) {
                this.playAnimation(this.IMAGES_IDLE)
            }
        }, 100);
    }
}