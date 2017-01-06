package com.naosim.kotlinjsgame.domain.lib

import com.naosim.kotlinjsgame.domain.Assets
interface UpdateEventName {
    val value: String
}

enum class D2UpdateEventName(override val value:String) : UpdateEventName {
    position("position"),
    verocity("verocity"),
    accel("accel");
}
class UpdateEvent<T>(val name: UpdateEventName, val arg: T)

open class D2(private var x: Int, private var y: Int, val updateEventName: D2UpdateEventName) {
    fun update(x: Int? = null, y: Int? = null): UpdateEvent<D2> {
        this.x = x ?: this.x
        this.y = y ?: this.y
        return UpdateEvent<D2>(updateEventName, D2(this.x, this.y, this.updateEventName))
    }
    fun getX(): Int {
        return x;
    }
    fun getY(): Int {
        return y;
    }
}

class Position(x: Int, y: Int) : D2(x, y, D2UpdateEventName.position)
class Velocity(x: Int, y: Int) : D2(x, y, D2UpdateEventName.verocity)
class Accel(x: Int, y: Int)    : D2(x, y, D2UpdateEventName.accel)

class Physics(val position: Position, val velocity: Velocity, val accel: Accel)
enum class PhysicsEnable(val isEnable: Boolean) { enable(true), disable(false) }
class SpriteModel(val physics: Physics, val assets: Assets, val physicsEnable: PhysicsEnable)
enum class CursorType {
    up, down, left, right
}
class Cursor(val type: CursorType, val isDown: Boolean)
class Cursors(val up: Cursor, val down: Cursor, val left: Cursor, val right: Cursor)

// とりあえずなんでも入れれるやつ
class Context(val cursors: Cursors)
