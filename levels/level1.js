const level1 = new Level(
    [
        new StandingEnemy(),
        new StandingEnemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Endboss()
    ],
    new Light(),
    [
        new backgroundObject('img/3. Background/Layers/5. Water/L2.png', -720),
        new backgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', -720),
        new backgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', -720),
        new backgroundObject('img/3. Background/Legacy/Layers/2. Floor/L2.png', -720),

        new backgroundObject('img/3. Background/Layers/5. Water/L1.png', 0),
        new backgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 0),
        new backgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/L1.png', 0),
        new backgroundObject('img/3. Background/Legacy/Layers/2. Floor/L1.png', 0),
        new backgroundObject('img/3. Background/Layers/5. Water/L2.png', 720),
        new backgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', 720),
        new backgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', 720),
        new backgroundObject('img/3. Background/Legacy/Layers/2. Floor/L2.png', 720),

        new backgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 2),
        new backgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 720 * 2),
        new backgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/L1.png', 720 * 2),
        new backgroundObject('img/3. Background/Legacy/Layers/2. Floor/L1.png', 720 * 2),
        new backgroundObject('img/3. Background/Layers/5. Water/L2.png', 720 * 3),
        new backgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/L2.png', 720 * 3),
        new backgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/L2.png', 720 * 3),
        new backgroundObject('img/3. Background/Legacy/Layers/2. Floor/L2.png', 720 * 3),
    ],
    [
        new Coinbow(500, 400),
        new Coinbow(540, 340),
        new Coinbow(600, 300),
        new Coinbow(670, 300),
        new Coinbow(730, 340),
        new Coinbow(770, 400),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
    ],
    [
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
    ]
);