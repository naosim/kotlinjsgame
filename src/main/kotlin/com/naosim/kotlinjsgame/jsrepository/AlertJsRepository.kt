package com.naosim.kotlinjsgame.jsrepository

interface AlertJsRepository {
    @JsName("show")
    fun show(text: String)
}