package com.naosim.kotlinjsgame.ap

import com.naosim.kotlinjsgame.domain.Assets
import com.naosim.kotlinjsgame.domain.lib.*
import com.naosim.kotlinjsgame.domain.shooting.BulletEntity
import com.naosim.kotlinjsgame.domain.shooting.ShipConfig
import com.naosim.kotlinjsgame.domain.shooting.ShipEntity
import com.naosim.kotlinjsgame.repository.GameRepository

class MainService(val gameRepository: GameRepository) {
    lateinit var shipEntity: ShipEntity
    var bulletEntities = emptyArray<BulletEntity>()

    fun preload() {
        // アセットの読み込み
        Assets.values().forEach { gameRepository.load(it) }
    }

    fun create() {
        shipEntity = gameRepository.createSpriteEntity(ShipConfig(), ::ShipEntity)
    }

    fun update(context: Context) {
        shipEntity.update(context, {
            bulletEntities = bulletEntities.plus(gameRepository.createSpriteEntity(it, ::BulletEntity))
        })
        bulletEntities.forEach { it.update(context) }

        bulletEntities = bulletEntities.filter { it.sprite.alive }.toTypedArray()
    }

}
