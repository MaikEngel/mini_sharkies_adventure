class Character extends MovableObject {

    height = 200;
    width = 250;
    x = 20;
    y = 50;
    speed = 4;
    pressedC = false;
    pressedSpace = false;
    timeout = 1200;
    currentBubbleImage = 0;
    currentSlapImage = 0;
    firstImage = true;

    offsetRight = 110;
    offsetBottom = 20;
    offsetLeft = 110;
    offsetTop = 100;

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
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
    ];

    IMAGES_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ]


    world;
    swim_sound = new Audio('audio/swim.mp3');

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLAP);
        this.loadImages(this.IMAGES_BUBBLE);
        this.loadImages(this.IMAGES_DEAD)
        this.loadImages(this.IMAGES_HURT)


        this.animate();
    }



    playBubbleAnimation(images) {
        let i = this.currentBubbleImage % images.length;
        if (i == images.length) {
            this.firstImage = true;
            this.currentSlapImage = 0;
        }
        if (i > 0 && this.firstImage == true) {
            this.currentBubbleImage = 0;
            this.firstImage = false;
        }
        let path = images[i];
        this.img = this.imageCatch[path];
        this.currentBubbleImage++;
        setTimeout(() => {
            this.world.holdbubbleAttack = false
        }, 1100);
    }

    playSlapAnimation(images) {
        let i = this.currentSlapImage % images.length;
        if (i == images.length) {
            this.firstImage = true
            this.currentSlapImage = 0

        }
        if (i > 0 && this.firstImage == true) {
            this.currentSlapImage = 0
            this.firstImage = false;
        }
        let path = images[i];
        this.img = this.imageCatch[path];
        this.currentSlapImage++;
        setTimeout(() => {
            this.world.holdSlapAttack = false
            this.offsetRight = 110
            this.offsetLeft = 110;


            setTimeout(() => {
                this.world.coolDownSlap = false

            }, 500);
        }, 100);
    }

    animate() {

        setInterval(() => {
            if (this.isDead()) {
                this.playDeadAnimation(this.IMAGES_DEAD);
                this.world.dead = true;
            } else {
                if (this.anyKeyPressed()) {
                    this.playAnimation(this.IMAGES_SWIMMING);
                }
                if (this.noKeyPressed()) {
                    this.playAnimation(this.IMAGES_IDLE);
                }

                if (this.spaceKeyPressed() && this.world.coolDownSlap == false || this.world.holdSlapAttack == true) {
                    this.playSlapAnimation(this.IMAGES_SLAP);
                    this.world.coolDownSlap = true;
                    this.world.holdSlapAttack = true;
                    this.offsetRight = 50;
                    this.offsetLeft = 50;


                }
                if (this.cKeyPressed() && this.world.coolDownBubble == false || this.world.holdbubbleAttack == true || this.world.bubbleAttack == true) {
                    this.world.holdbubbleAttack = true;
                    this.playBubbleAnimation(this.IMAGES_BUBBLE);
                }
            }
        }, 150);


        setInterval(() => {
            if (this.dead == false) {
                if (this.isHurt()) {
                    this.playAnimation(this.IMAGES_HURT)
                }
                if (this.rightKeyPressed() && this.x < this.world.level.level_end_x && this.world.holdSlapAttack == false) {
                    this.moveRight()
                    this.otherDirection = false;
                    this.swim_sound.play();
                }

                if (this.leftKeyPressed() && this.x > 0 && this.world.holdSlapAttack == false) {
                    this.moveLeft()
                    this.otherDirection = true;
                    this.swim_sound.play();
                }

                if (this.upKeyPressed() && this.y > -110 && this.world.holdSlapAttack == false) {
                    this.moveUp()
                    this.swim_sound.play();
                }

                if (this.downKeyPressed() && this.y < 250 && this.world.holdSlapAttack == false) {
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
            }
        }, 1000 / 60);

    }


}
