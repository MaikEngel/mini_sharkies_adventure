class StandingEnemy extends MovableObject {
    height = 198 - 120;
    width = 241 - 120;

    offsetRight = 30;
    offsetBottom = 20;
    offsetLeft = 10;
    offsetTop = 10;

    IMAGES_IDLE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
        
    ]


    constructor(x, y) {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.x = x;
        this.y = y;
        this.speed = 0.25 + Math.random() * 0.5
        this.animate()
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE)
        }, 300);
    }
}