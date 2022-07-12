class Level {
    enemies;
    light;
    backgroundObjects;
    coins;
    poisons;
    bar;
    level_end_x = 2100;


    
    constructor(enemies, light, backgroundObjects, coins, poisons, bar) {
        this.enemies = enemies;
        this.light = light;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisons = poisons;
        this.bar = bar;
    }
}