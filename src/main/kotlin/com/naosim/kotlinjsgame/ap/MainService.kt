package com.naosim.kotlinjsgame.ap

import com.naosim.kotlinjsgame.domain.Assets
import com.naosim.kotlinjsgame.domain.lib.*
import com.naosim.kotlinjsgame.repository.GameRepository

class MainService(val gameRepository: GameRepository) {
    lateinit var ship: SpriteModel


    @native
    fun preload() {
        Assets.values().forEach { gameRepository.load(it) }
    }

    @native
    fun create() {
        ship = SpriteModel(Physics(Position(320, 500), Velocity(0, 0), Accel(0, 0)), Assets.ship, PhysicsEnable.enable)
        gameRepository.init(ship)
    }

    @native
    fun update(context: Context) {

        val x = if(context.cursors.left.isDown) {
            -200
        } else if(context.cursors.right.isDown) {
            200
        } else {
            0
        }

        val updateEvent = ship.physics.velocity.update(x)
        gameRepository.update(updateEvent)
    }

}
