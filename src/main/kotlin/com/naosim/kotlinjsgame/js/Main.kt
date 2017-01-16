package com.naosim.kotlinjsgame.js

import com.naosim.kotlinjsgame.domain.ArrowGameKey
import com.naosim.kotlinjsgame.domain.Global
import com.naosim.kotlinjsgame.domain.Player
import com.naosim.kotlinjsgame.domain.UpdateRegister
import com.naosim.kotlinjsgame.phaser.GameFactory
import com.naosim.kotlinjsgame.phaser.ID
import com.naosim.kotlinjsgame.phaser.Sprite

/**
 * phaserFactory: (callback)->Phaser.Game
 */


class Main(val Phaser: dynamic, gameFactory: GameFactory) {
    var game: dynamic = null
    lateinit var player: Player
//    lateinit var sprite: Sprite
    lateinit var global: Global
    init {
        var map: dynamic
        var coins: dynamic = null

        var layer: dynamic = null


        val collectCoin = { player:dynamic, coin: dynamic ->
            coin.kill()
        }

        val preload = {

            game.load.tilemap(ArrowGameKey.map.value, "assets/tilemaps/maps/features_test.json", null, Phaser.Tilemap.TILED_JSON);

            game.load.image(ArrowGameKey.ground_1x1.value, "assets/tilemaps/tiles/ground_1x1.png");
            game.load.image(ArrowGameKey.walls_1x2.value, "assets/tilemaps/tiles/walls_1x2.png");
            game.load.image(ArrowGameKey.tiles2.value, "assets/tilemaps/tiles/tiles2.png");

            game.load.image(ArrowGameKey.phaser.value, "assets/sprites/arrow.png");
            game.load.spritesheet(ArrowGameKey.coin.value, "assets/sprites/coin.png", 32, 32);

        }

        val create = {
            global.cursors = game.input.keyboard.createCursorKeys()
            global.updateRegister = UpdateRegister(ID("-1"))

            map = game.add.tilemap(ArrowGameKey.map.value);

            map.addTilesetImage(ArrowGameKey.ground_1x1.value);
            map.addTilesetImage(ArrowGameKey.walls_1x2.value);
            map.addTilesetImage(ArrowGameKey.tiles2.value);

            map.setCollisionBetween(1, 12);

            layer = map.createLayer(ArrowGameKey.Tile_Layer_1.value);

            layer.resizeWorld();

            game.physics.startSystem(Phaser.Physics.ARCADE);

            //  Here we create our coins group
            coins = game.add.group();
            coins.enableBody = true;

            //  And now we convert all of the Tiled objects with an ID of 34 into sprites within the coins group
            map.createFromObjects("Object Layer 1", 34, "coin", 0, true, false, coins);

            //  Add animations to all of the coin sprites
            coins.callAll("animations.add", "animations", "spin", arrayOf(0, 1, 2, 3, 4, 5), 10, true)
            coins.callAll("animations.play", "animations", "spin");

            val sprite = game.add.sprite(260, 100, ArrowGameKey.phaser.value)
            game.physics.arcade.enable(sprite)
            player = Player(ID("player"), sprite)
            global.updateRegister.register(player)

            //  This adjusts the collision body size.
//            sprite.body.setSize(32, 32, 0, 0)
//
//            //  We"ll set a lower max angular velocity here to keep it from going totally nuts
//            sprite.body.maxAngular = 500
//
//            //  Apply a drag otherwise the sprite will just spin and never slow down
//            sprite.body.angularDrag = 50

            game.camera.follow(sprite)

        }

        val update = {
            game.physics.arcade.collide(player.sprite, layer);
            game.physics.arcade.overlap(player.sprite, coins, collectCoin, null, game);
//            player.update(global)
            global.updateRegister.update(global)
        }


        val render = {
            game.debug.body(player.sprite)
            global.updateRegister.render(global)

        }

        game = gameFactory.create(preload, create, update, render)
        global = Global(game)
    }
}