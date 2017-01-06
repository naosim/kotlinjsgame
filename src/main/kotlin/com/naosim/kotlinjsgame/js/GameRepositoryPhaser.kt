package com.naosim.kotlinjsgame.js

import com.naosim.kotlinjsgame.domain.Assets
import com.naosim.kotlinjsgame.domain.lib.*
import com.naosim.kotlinjsgame.repository.GameRepository

class GameRepositoryPhaser(val game: dynamic, val spriteMap: dynamic) : GameRepository {

    override fun load(assets: Assets) {
        game.load.image(assets.name, assets.filename)
    }

    override fun init(spriteModel: SpriteModel) {
        val sprite: dynamic = game.add.sprite(
                spriteModel.physics.position.getX(),
                spriteModel.physics.position.getY(),
                spriteModel.assets.name
        )
        spriteMap["ship"] = sprite

        if(spriteModel.physicsEnable.isEnable) {
            game.physics.arcade.enable(sprite);
        }

        sprite.body.velocity.x = spriteModel.physics.velocity.getX()
        sprite.body.velocity.y = spriteModel.physics.velocity.getY()
    }

    override fun update(updateEvent: UpdateEvent<*>) {
        val arg: dynamic = updateEvent.arg
        if(updateEvent.name == D2UpdateEventName.verocity) {
            spriteMap["ship"].body.velocity.x = arg.getX()
            spriteMap["ship"].body.velocity.y = arg.getY()
        }
    }
}

class ContextFactory {
    @native
    fun create(
            leftIsDown: Boolean,
            rightIsDown: Boolean
    ): Context {
        return Context(Cursors(
                Cursor(CursorType.up, false),
                Cursor(CursorType.down, false),
                Cursor(CursorType.left, leftIsDown),
                Cursor(CursorType.right, rightIsDown)
        ))
    }
}



