class StatusbarEndboss extends MovableObject {
    x = 480;
    y = 0;
    height = 0;
    width = 0;
    world;


    IMAGES_LIFEBAR = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/green/Life/100_  copia 2.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_LIFEBAR[0]);
        this.loadImages(this.IMAGES_LIFEBAR);

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.lifeBar(this.IMAGES_LIFEBAR);
            if (this.world.spawn == true) {
                this.height = 175;
                this.width = 50;
            }
        }, 1000 / 60);
    }
}