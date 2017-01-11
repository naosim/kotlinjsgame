package com.naosim.kotlinjsgame.repository

import com.naosim.kotlinjsgame.domain.Assets
import com.naosim.kotlinjsgame.domain.lib.*

interface GameRepository {
    fun load(assets: Assets)
    fun <T:SpriteConfig, R> createSpriteEntity(spriteConfig: T, factory: (id:ID, sprite:Sprite, config:T)->R): R
}
