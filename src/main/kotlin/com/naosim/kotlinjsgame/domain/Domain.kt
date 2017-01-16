package com.naosim.kotlinjsgame.domain

import com.naosim.kotlinjsgame.phaser.*

enum class ArrowGameKey(private var label: String? = null): GameKey {
    map(),
    ground_1x1(),
    walls_1x2(),
    tiles2(),
    phaser(),
    coin(),
    Tile_Layer_1("Tile Layer 1");
    ;
    override val value: String
        get() = if(label == null) name else label!!
}

class UpdateRegister<G>(override val id: ID):PhaserLoop<G> {
    val map: MutableMap<ID, PhaserLoop<G>>
    init {
        map = mutableMapOf(Pair<ID, PhaserLoop<G>>(id, this))
        map.remove(id)
    }

    fun register(obj:PhaserLoop<G>) {
        map.put(obj.id, obj)
    }

    fun unregister(obj:PhaserLoop<G>) {
        map.remove(obj.id)
    }

    override fun update(global: G) {
        map.values.forEach { it.update(global) }
    }

    override fun render(global: G) {
        map.values.forEach { it.render(global) }
    }
}

class Global(
        val game: dynamic
) {
    lateinit var updateRegister: UpdateRegister<Global>
    var cursors: dynamic = null
}

class Player(override val id: ID, val sprite: Sprite): PhaserLoop<Global> {
    init {
        sprite.anchor.set(0.5)
        sprite.body.setSize(32, 32, 0, 0)

        //  We"ll set a lower max angular velocity here to keep it from going totally nuts
        sprite.body.maxAngular = 500

        //  Apply a drag otherwise the sprite will just spin and never slow down
        sprite.body.angularDrag = 50
    }
    override fun update(global: Global) {
        sprite.body.velocity.x = 0;
        sprite.body.velocity.y = 0;
        sprite.body.angularVelocity = 0;

        if (global.cursors.left.isDown)
        {
            sprite.body.angularVelocity = -300;
        }
        else if (global.cursors.right.isDown)
        {
            sprite.body.angularVelocity = 300;
        }

        if (global.cursors.up.isDown)
        {
            global.game.physics.arcade.velocityFromAngle(sprite.angle, 300, sprite.body.velocity);
        }
    }

    override fun render(global: Global) {
//        throw UnsupportedOperationException("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}