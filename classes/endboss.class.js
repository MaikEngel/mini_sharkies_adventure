class Endboss extends MovableObject {
    world;

    height = 500;
    width = 600;
    y = -120

    offsetRight = 30;
    offsetBottom = 50;
    offsetLeft = 50;
    offsetTop = 250;

    testI = 0;


    IMAGES_SPAWN = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ]

    IMAGES_IDLE = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_SPAWN[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SPAWN);
        this.x = 2000;
        setTimeout(() => {
            this.animate()
        }, 1500);
       
    }

    animate() {
        setInterval(() => {
            if (this.testI < 10 && this.world.spawn == true) {
                this.playAnimation(this.IMAGES_SPAWN)
                this.testI++
            } if (this.testI >= 10 && this.world.spawn == true) {
                this.playAnimation(this.IMAGES_IDLE)
            }
        }, 150);
    }
}
