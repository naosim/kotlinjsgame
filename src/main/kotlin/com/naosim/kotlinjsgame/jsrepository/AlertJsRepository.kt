package com.naosim.kotlinjsgame.jsrepository

interface AlertJsRepository {
    @native
    fun show(text: String)
}