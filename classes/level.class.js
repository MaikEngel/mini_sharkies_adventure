class Level {
    enemies;
    light;
    backgroundObjects;
    coins;
    poisons;
    heart;
    level_start_x;
    level_end_x;

    /**
     * Create and initialize objects from the Level class.
     * @param {number} level_start_x - The position where the level starts on the x coordinate
     * @param {number} level_end_x - The position where the level ends on the x coordinate
     * @param {Array} enemies - The speed, position, image and so on inforamtion from the enemies
     * @param {Array} light - The speed, position, image and so on inforamtion from the light
     * @param {Array} backgroundObjects - The speed, position, image and so on inforamtion from the backgroundObjects
     * @param {Array} coins - The speed, position, image and so on inforamtion from the coins
     * @param {Array} poisons - The speed, position, image and so on inforamtion from the poisons
     * @param {Array} heart - The speed, position, image and so on inforamtion from the heart
     */
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