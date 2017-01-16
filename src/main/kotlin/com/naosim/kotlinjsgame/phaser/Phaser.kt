package com.naosim.kotlinjsgame.phaser

import com.naosim.kotlinjsgame.domain.Global


interface GameFactory {
    val create : (preload:()->Unit, create:()->Unit, update:()->Unit, render:()->Unit)->Any
}

interface Sprite: Point {
    val game: dynamic
    val key: Any
    val frame: Any
}

interface GameKey {
    val value: String
}

data class ID(val value: String)

interface PhaserLoop<G> {
    val id: ID
    fun update(global:G):Unit
    fun render(global:G):Unit
}

interface PhaserLifeCycle<G>: PhaserLoop<G> {
    fun create(global:G):Unit
}


interface Point {
    var x: Number
    var y: Number
    val distance:(point: Point, round:Boolean)->Number

    var anchor: Point
    var angle: Number
    var body: PhysicsBody
    var maxAngular: Number
    var angularDrag: Number

    @native
    fun set(x: Number, y: Number): Point
    @native
    fun set(x: Number): Point
}

interface PhysicsBody: Point {
    var velocity: velocity
    var acceleration: Acceleration
    var angularVelocity: Number
    var setSize:(width:Number, height:Number, offsetX: Number?, offsetY: Number?)->Unit
}

interface velocity: Point
interface Acceleration: Point