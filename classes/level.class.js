class Level {
    enemies;
    light;
    backgroundObjects;
    coins;
    poisons;
    level_end_x = 2100;


    constructor(enemies, light, backgroundObjects, coins, poisons) {
        this.enemies = enemies;
        this.light = light;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisons = poisons;
    }
}