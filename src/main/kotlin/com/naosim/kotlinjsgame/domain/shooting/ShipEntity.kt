package com.naosim.kotlinjsgame.domain.shooting

import com.naosim.kotlinjsgame.domain.Assets
import com.naosim.kotlinjsgame.domain.lib.*

class ShipConfig: SpriteConfig {
    override val assets = Assets.ship
    override val physicsEnable = PhysicsEnable.enable
}

class ShipEntity(override val id: ID, override val sprite: Sprite, override val spriteConfig: ShipConfig) : SpriteModelEntity<ShipConfig> {
    override fun kill() {
        sprite.kill()
    }

    init {
        this.sprite.physics.position.update(320, 500)
//        this.sprite.addEventListener(SpriteEvent.onKilled, { println("killed") })
    }

    fun update(context: Context, onCreateBullet:(BulletConfig)->Unit) {
        val inCamera = sprite.inCamera
        val x = if(!inCamera) {
            0
        } else if(context.buttons.left.isDown) {
            -200
        } else if(context.buttons.right.isDown) {
            200
        } else {
            0
        }
        sprite.physics.velocity.update(x)

        if(context.buttons.a.isDownStart) {
            onCreateBullet.invoke(BulletConfig(sprite.physics.position.getX(), sprite.physics.position.getY()))
//            println(context.buttons.a.isDownStart)
//            kill()
        }

    }
}