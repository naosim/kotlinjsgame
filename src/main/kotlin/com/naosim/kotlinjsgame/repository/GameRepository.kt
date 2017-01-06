package com.naosim.kotlinjsgame.repository

import com.naosim.kotlinjsgame.domain.Assets
import com.naosim.kotlinjsgame.domain.lib.SpriteModel
import com.naosim.kotlinjsgame.domain.lib.UpdateEvent

interface GameRepository {
    @native
    fun load(assets: Assets)

    @native
    fun init(spriteModel: SpriteModel)

    @native
    fun update(updateEvent: UpdateEvent<*>)
}
