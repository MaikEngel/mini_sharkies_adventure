class Level {
    enemies;
    light;
    backgroundObjects;
    coins;
    poisons;
    heart;
    level_start_x;
    level_end_x;


    
    constructor(level_start_x, level_end_x, enemies, light, backgroundObjects, coins, poisons, heart) {
        this.level_start_x = level_start_x,
        this.level_end_x = level_end_x,
        this.enemies = enemies;
        this.light = light;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisons = poisons;
        this.heart = heart;
    }
}