class StandingEnemy extends MovableObject {
    height = 198 - 120;
    width = 241 - 120;
    offsetRight = 30;
    offsetBottom = 20;
    offsetLeft = 10;
    offsetTop = 10;


    constructor(x, y) {
        super().loadImage(IMAGES.STANDINGENEMY.IDLE[0]);
        this.loadImages(IMAGES.STANDINGENEMY.IDLE);
        this.x = x;
        this.y = y;
        this.speed = 0.25 + Math.random() * 0.5
        this.animate()
    }

    
    animate() {
        setInterval(() => {
            if (!pause) {
                this.playAnimation(IMAGES.STANDINGENEMY.IDLE)
            }
        }, 300);
    }
}