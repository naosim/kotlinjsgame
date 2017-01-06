// alias
var kotlinjsgame = app.com.naosim.kotlinjsgame;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
var gameRepository = new kotlinjsgame.js.GameRepositoryPhaser(game, {});
var mainService = new kotlinjsgame.ap.MainService(gameRepository);

function preload() { mainService.preload(); }

var sprite;
var weapon;
var cursors;
var fireButton;

function create() {
    mainService.create();

//    //  Creates 1 single bullet, using the 'bullet' graphic
//    weapon = game.add.weapon(1, 'bullet');
//
//    //  The bullet will be automatically killed when it leaves the world bounds
//    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
//
//    //  Because our bullet is drawn facing up, we need to offset its rotation:
//    weapon.bulletAngleOffset = 90;
//
//    //  The speed at which the bullet is fired
//    weapon.bulletSpeed = 400;
//
//    sprite = this.add.sprite(320, 500, 'ship');
//
//    game.physics.arcade.enable(sprite);
//
//    //  Tell the Weapon to track the 'player' Sprite, offset by 14px horizontally, 0 vertically
//    weapon.trackSprite(sprite, 14, 0);
//
//    cursors = this.input.keyboard.createCursorKeys();
//
//    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    cursors = this.input.keyboard.createCursorKeys();

}

function update() {
    var context = new kotlinjsgame.js.ContextFactory().create(cursors.left.isDown, cursors.right.isDown)
    mainService.update(context);

//    sprite.body.velocity.x = 0;
//
//    if (cursors.left.isDown)
//    {
//        sprite.body.velocity.x = -200;
//    }
//    else if (cursors.right.isDown)
//    {
//        sprite.body.velocity.x = 200;
//    }
//
//    if (fireButton.isDown)
//    {
//        weapon.fire();
//    }

}

function render() {

//    weapon.debug();

}
