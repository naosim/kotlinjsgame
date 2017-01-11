package com.naosim.kotlinjsgame.js

import com.naosim.kotlinjsgame.domain.Assets
import com.naosim.kotlinjsgame.domain.lib.*
import com.naosim.kotlinjsgame.repository.GameRepository

class GameRepositoryPhaser(val game: dynamic) : GameRepository {
    var idCount = 0

    override fun load(assets: Assets) {
        println("${assets.name} ${assets.filename}")
        game.load.image(assets.name, assets.filename)
    }

    override fun <T:SpriteConfig, R> createSpriteEntity(spriteConfig: T, factory: (id:ID, sprite:Sprite, config:T)->R): R {
        val id = "${spriteConfig.assets.name}_${idCount++}"

        val spritePhaser: dynamic = game.add.sprite(0, 0, spriteConfig.assets.name)

        if(spriteConfig.physicsEnable.isEnable) {
            game.physics.arcade.enable(spritePhaser);
        }

        val p = object : Position {
            override fun getX(): Int {
                return spritePhaser.body.position.x
//                return spritePhaser.x
            }

            override fun getY(): Int {
                return spritePhaser.body.position.y
//                return spritePhaser.y
            }

            override fun update(x: Int?, y: Int?) {
                if(x != null) {
                    spritePhaser.x = x
                }
                if(y != null) {
                    spritePhaser.y = y
                }
            }
        }

        val v = object : Velocity {
            override fun getX(): Int {
                return spritePhaser.body.velocity.x
            }

            override fun getY(): Int {
                return spritePhaser.body.velocity.y
            }

            override fun update(x: Int?, y: Int?) {
                if(x != null) {
                    spritePhaser.body.velocity.x = x
                }
                if(y != null) {
                    spritePhaser.body.velocity.y = y
                }
            }
        }

        val a = object : Accel {
            override fun getX(): Int {
                throw UnsupportedOperationException()
            }

            override fun getY(): Int {
                throw UnsupportedOperationException()
            }

            override fun update(x: Int?, y: Int?) {
                throw UnsupportedOperationException()
            }
        }

        return factory.invoke(ID(id), object : Sprite {
            override val alive: Boolean
                get() = spritePhaser.alive

            override fun addEventListener(spriteEvent: SpriteEvent, action: () -> Unit) {
                if(spriteEvent == SpriteEvent.onKilled) {
                    spritePhaser.events.onKilled.addOnce({action.invoke()})
                    return
                }
                throw UnsupportedOperationException("not implemented") //To change body of created functions use File | Settings | File Templates.
            }

            override val physics: Physics = Physics(p, v, a)
            override val inCamera: Boolean
                get() = spritePhaser.inCamera
            override fun kill() {
                spritePhaser.kill()
            }
        }, spriteConfig)
    }

//    override fun update(spriteModelEntity: SpriteModelEntity<*>, updateEvent: UpdateEvent<*>) {
//        val arg: dynamic = updateEvent.arg
//        if(updateEvent.name == D2UpdateEventName.verocity) {
////            val pos = arg as D2
//            spriteMap[spriteModelEntity.id.value].body.velocity.x = arg.getX()
//            spriteMap[spriteModelEntity.id.value].body.velocity.y = arg.getY()
//        }
//    }
}

class ContextFactory {
    var lastLeftIsDown = false
    var lastRightIsDown = false
    var lastAIsDown = false
    @native
    fun create(
            leftIsDown: Boolean,
            rightIsDown: Boolean,
            aIsDown: Boolean
    ): Context {
        var context = Context(Buttons(
                Button(ButtonType.up, false, false),
                Button(ButtonType.down, false, false),
                Button(ButtonType.left, leftIsDown, leftIsDown && !lastLeftIsDown),
                Button(ButtonType.right, rightIsDown, rightIsDown && !lastRightIsDown),
                Button(ButtonType.a, aIsDown, aIsDown && !lastAIsDown)
        ))
        lastLeftIsDown = leftIsDown
        lastRightIsDown = rightIsDown
        lastAIsDown = aIsDown

        return context
    }
}



