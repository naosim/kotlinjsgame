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

interface D2 {
    fun getX(): Int
    fun getY(): Int
    fun update(x: Int? = null, y: Int? = null)
}

interface Position : D2
interface Velocity : D2
interface Accel : D2

class Physics(val position: Position, val velocity: Velocity, val accel: Accel)
enum class PhysicsEnable(val isEnable: Boolean) { enable(true), disable(false) }

enum class SpriteEvent {
    onKilled
}

interface Sprite {
    val physics: Physics
    val inCamera: Boolean
    val alive: Boolean
    fun kill()
    fun addEventListener(spriteEvent: SpriteEvent, action:()->Unit)
}

class ID(val value: String)
//interface SpriteModel {
//    val sprite: Sprite// lateinit
//    val assets: Assets
//    val physicsEnable: PhysicsEnable
//
//    fun setSprite(sprite: Sprite)
//}
interface SpriteConfig {
    val assets: Assets
    val physicsEnable: PhysicsEnable
}

interface SpriteModelEntity<T:SpriteConfig> {
    val id: ID
    val sprite: Sprite
    val spriteConfig: T
    fun kill()
}

enum class ButtonType {
    up, down, left, right, a, b
}
class Button(val type: ButtonType, val isDown: Boolean, val isDownStart: Boolean = false)
class Buttons(val up: Button, val down: Button, val left: Button, val right: Button, val a: Button)

// とりあえずなんでも入れれるやつ
class Context(val buttons: Buttons)
