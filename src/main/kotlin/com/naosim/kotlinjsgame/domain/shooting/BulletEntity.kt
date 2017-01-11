package com.naosim.kotlinjsgame.domain.shooting

import com.naosim.kotlinjsgame.domain.Assets
import com.naosim.kotlinjsgame.domain.lib.*

class BulletConfig(val x: Int, val y: Int): SpriteConfig {
    override val assets = Assets.bullet
    override val physicsEnable = PhysicsEnable.enable
}
class BulletEntity(override val id: ID, override val sprite: Sprite, override val spriteConfig: BulletConfig) : SpriteModelEntity<BulletConfig> {
    override fun kill() {
        sprite.kill()
    }

    init {
        this.sprite.physics.position.update(spriteConfig.x, spriteConfig.y)
        this.sprite.physics.velocity.update(null, -300)
        this.sprite.addEventListener(SpriteEvent.onKilled, { println("killed") })
    }

    fun update(context: Context) {
        if(!this.sprite.inCamera) {
            sprite.kill()
        }
    }
}