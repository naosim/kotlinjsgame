package com.naosim.kotlinjsgame.ap

import com.naosim.kotlinjsgame.domain.Position
import com.naosim.kotlinjsgame.jsrepository.AlertJsRepository

class ShowPositionService(val alertJsRepository: AlertJsRepository) {
    fun invoke() {
        val p = Position(40.5, 30.1)
        alertJsRepository.show("${p.x}, ${p.y}");
    }
}