function drawGrid(graphics) {
    graphics.lineStyle(1, 0x0000ff, 0.8);
    for(let i = 0; i < 18; i++) {
        graphics.moveTo(0, i * 60);
        graphics.lineTo(1920, i * 60);
    }
    for(let j = 0; j < 32; j++) {
        graphics.moveTo(j * 60, 0);
        graphics.lineTo(j * 60, 1080);
    }
    graphics.strokePath();
}


function coords(event){
    let x = event.clientX; 
    let y = event.clientY; 
}


function generarHud(graphics){
    let scene = game.scene.scenes[0];

    // Pinta hud dret
    HudItems.add(new HudItem(scene,1920-150, 200,'turret') ,true)
    HudItems.add(new HudItem(scene,1920-150, 400,'cannon') ,true)
    graphics.fillStyle(0xFFFF00);
    graphics.lineStyle(40, 0xFFD800, 1)
    graphics.fillRect(1920-300, 0, 290, 1080);
    graphics.strokeRect(1920-300, 20, 280, 1040);
    graphics.depth=10;


    // Mostra els diners
    this.moneyText = scene.add.text(1920, 0);
    moneyText.text = "Money: "+money.value;
    moneyText.setFont("20px Arial")
    moneyText.setColor('#ffffff');

    // Mostra la vida
    this.healthText = scene.add.text(0, 0);
    healthText.text = "HP: "+health.value ;
    healthText.setFont("20px Arial")
    healthText.setColor('#ffffff');

}


function placeTurret(pointer,type,scene,turrets) {
    let i = Math.floor(pointer.y/60);
    let j = Math.floor(pointer.x/60);
    if(canPlaceTurret(i, j)) {
        let turret = new Turret(scene,type);
        if(money.pay(turret.stats.price) == null){
            console.log("Can't afford")
            return;
        }
        turrets.add(turret,true);
        if (turret)
        {
            turret.setActive(true);
            turret.setVisible(true);
            turret.place(i, j);
        }   
    }
}
function canPlaceTurret(i, j) {
    return map[i][j] === 0;
}
function addBullet(x, y, angle,enemy,range,damage) {
    let bullet = bullets.get();
    if (bullet)
    {
        bullet.damage=damage
        bullet.range = range;
        bullet.fire(x, y, angle,enemy);
    }
}
function getEnemy(range) {
    let enemyUnits = enemies.getChildren().sort((a,b)=>b.follower.t-a.follower.t)
    for(let i = 0; i < enemyUnits.length; i++) {
        let enemy = enemyUnits[i]
        if(enemy.active && range.contains(enemy.x,enemy.y)){
            return enemy;
        }
    }
    // let firstEnemy = enemies.getFirstAlive()
    // return firstEnemy;
}

function damageEnemy(enemy, bullet) {  
    // only if both enemy and bullet are alive
    if (enemy.active === true && bullet.active === true) {
        // we remove the bullet right away
        bullet.setActive(false);
        bullet.setVisible(false);    
        
        // decrease the enemy hp with BULLET_DAMAGE 
        enemy.receiveDamage(bullet.damage);
    }
}

function hasEnemy(ronda){
    for(let type in ronda) {
        if(ronda[type]>0){
            return 1;
        }
    }
    return 0;
}
function nextEnemy(ronda){
    for(let type in ronda) {
        if(ronda[type]>0){
            return type;
        }
    }
    return 0;
}

function finishGame(){
    let scene = game.scene.scenes[0];
    this.endText = scene.add.text(1920, 0);
    endText.text = "";
    endText.setFont("100px Arial")
    endText.setColor('#ffffff');
}