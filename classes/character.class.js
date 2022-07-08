class Character extends MovableObject {

    height = 200;
    width = 250;
    x = 20;
    y = 50;
    speed = 4;
    pressedC = false;
    pressedSpace = false;
    timeout = 1200;


    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];

    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];

    IMAGES_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ]

    world;
    swim_sound = new Audio('audio/swim.mp3');

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLAP);
        this.loadImages(this.IMAGES_BUBBLE);

        this.animate();
    }


    playAttackAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCatch[path];
        this.currentImage++;
    }

    animate() {

        setInterval(() => {
            if (this.anyKeyPressed()) {
                this.playAnimation(this.IMAGES_SWIMMING)
            }
            if (this.noKeyPressed()) {
                this.playAnimation(this.IMAGES_IDLE)
            }
        }, 150);

        setInterval(() => {
            if (this.spaceKeyPressed()) {
                this.pressedSpace = true;
                this.playAttackAnimation(this.IMAGES_SLAP)
            }
            if (this.cKeyPressed()) {
                console.log('Im Interval')
                this.pressedC = true;
                for (let i = 0; i < this.IMAGES_BUBBLE.length; i++) {
                    this.playAttackAnimation(this.IMAGES_BUBBLE)
                };
            }
        }, 150);

        setInterval(() => {
            if (this.rightKeyPressed() && this.x < this.world.level.level_end_x) {
                this.moveRight()
                this.otherDirection = false;
                this.swim_sound.play();
            }

            if (this.leftKeyPressed() && this.x > 0) {
                this.moveLeft()
                this.otherDirection = true;
                this.swim_sound.play();

            }

            if (this.upKeyPressed() && this.y > -110) {
                this.moveUp()
                this.swim_sound.play();
            }

            if (this.downKeyPressed() && this.y < 250) {
                this.moveDown()
                this.swim_sound.play();
            }

            if (this.shiftLeftKeyPressed()) {// Speed up the Character
                this.speed = 8;
            }

            if (!this.shiftLeftKeyPressed()) {// Normal speed 
                this.speed = 4;
            }

            this.world.camera_x = -this.x;
        }, 1000 / 60);

    }


}
