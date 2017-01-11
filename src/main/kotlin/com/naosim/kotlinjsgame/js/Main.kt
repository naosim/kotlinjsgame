package com.naosim.kotlinjsgame.js

import com.naosim.kotlinjsgame.ap.MainService

/**
 * phaserFactory: (callback)->Phaser.Game
 */
class Main(val Phaser: dynamic, phaserFactory: (preload:()->Unit, create:()->Unit, update:()->Unit)->dynamic) {
    var game: dynamic = null
    lateinit var mainService: MainService
    var aButton: dynamic = null
    var cursors: dynamic = null

    val p = {
        println("hoge")
    }

    init {
        val contextFactory = ContextFactory()
        game = phaserFactory.invoke({ mainService.preload() },
                {
                    aButton = game!!.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
                    cursors = game!!.input.keyboard.createCursorKeys();
                    mainService.create()
                },
                {
                    val context = contextFactory.create(cursors.left.isDown, cursors.right.isDown, aButton.isDown)
                    mainService.update(context)
                }
        )
        mainService = MainService(GameRepositoryPhaser(game))
    }
}