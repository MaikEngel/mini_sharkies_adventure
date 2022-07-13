class Level {
    enemies;
    light;
    backgroundObjects;
    coins;
    poisons;
    heart;
    level_end_x = 2100;


    
    constructor(enemies, light, backgroundObjects, coins, poisons, heart) {
        this.enemies = enemies;
        this.light = light;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisons = poisons;
        this.heart = heart;
    }
}