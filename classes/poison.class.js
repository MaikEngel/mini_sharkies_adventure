class Poison extends MovableObject {
    height = 198 - 120;
    width = 241 - 120;

    IMAGES_SWIMMING = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png',
    ]

    IMAGES_IDLE = [
        'img/4. Marcadores/Posión/Light - Right.png'
    ]


    constructor(x, y) {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_IDLE);
        this.x = x;
        this.y = y;
        this.speed = 0.25 + Math.random() * 0.1
        this.animate()
    }

    animate() {

        setInterval(() => {
            if (this.y < 330) {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
            if (this.y >= 330) {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 100);
        this.moveDown()

    }

    moveDown() {
        setInterval(() => {
            if (this.y < 330) {
                this.y += this.speed;
            }
        }, 1000 / 60);
    }
}

