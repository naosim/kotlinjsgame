if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
var app = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      naosim: Kotlin.definePackage(null, /** @lends _.com.naosim */ {
        kotlinjsgame: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame */ {
          domain: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.domain */ {
            ArrowGameKey: Kotlin.createEnumClass(function () {
              return [_.com.naosim.kotlinjsgame.phaser.GameKey, Kotlin.Enum];
            }, function ArrowGameKey(label) {
              if (label === void 0)
                label = null;
              ArrowGameKey.baseInitializer.call(this);
              this.label_pyugy0$_0 = label;
            }, function () {
              return {
                map: function () {
                  return new _.com.naosim.kotlinjsgame.domain.ArrowGameKey();
                },
                ground_1x1: function () {
                  return new _.com.naosim.kotlinjsgame.domain.ArrowGameKey();
                },
                walls_1x2: function () {
                  return new _.com.naosim.kotlinjsgame.domain.ArrowGameKey();
                },
                tiles2: function () {
                  return new _.com.naosim.kotlinjsgame.domain.ArrowGameKey();
                },
                phaser: function () {
                  return new _.com.naosim.kotlinjsgame.domain.ArrowGameKey();
                },
                coin: function () {
                  return new _.com.naosim.kotlinjsgame.domain.ArrowGameKey();
                },
                Tile_Layer_1: function () {
                  return new _.com.naosim.kotlinjsgame.domain.ArrowGameKey('Tile Layer 1');
                }
              };
            }, /** @lends _.com.naosim.kotlinjsgame.domain.ArrowGameKey.prototype */ {
              value: {
                get: function () {
                  var tmp$0;
                  return this.label_pyugy0$_0 == null ? this.name : (tmp$0 = this.label_pyugy0$_0) != null ? tmp$0 : Kotlin.throwNPE();
                }
              }
            }),
            UpdateRegister: Kotlin.createClass(function () {
              return [_.com.naosim.kotlinjsgame.phaser.PhaserLoop];
            }, function UpdateRegister(id) {
              this.id_1xr5v4$_0 = id;
              this.map = Kotlin.kotlin.collections.mutableMapOf_eoa9s7$([new Kotlin.kotlin.Pair(this.id, this)]);
              this.map.remove_za3rmp$(this.id);
            }, /** @lends _.com.naosim.kotlinjsgame.domain.UpdateRegister.prototype */ {
              id: {
                get: function () {
                  return this.id_1xr5v4$_0;
                }
              },
              register_xbudgp$: function (obj) {
                this.map.put_wn2jw4$(obj.id, obj);
              },
              unregister_xbudgp$: function (obj) {
                this.map.remove_za3rmp$(obj.id);
              },
              update_za3rmp$: function (global) {
                var tmp$0;
                tmp$0 = this.map.values.iterator();
                while (tmp$0.hasNext()) {
                  var element = tmp$0.next();
                  element.update_za3rmp$(global);
                }
              },
              render_za3rmp$: function (global) {
                var tmp$0;
                tmp$0 = this.map.values.iterator();
                while (tmp$0.hasNext()) {
                  var element = tmp$0.next();
                  element.render_za3rmp$(global);
                }
              }
            }, /** @lends _.com.naosim.kotlinjsgame.domain.UpdateRegister */ {
            }),
            Global: Kotlin.createClass(null, function Global$(game) {
              this.game = game;
              this.cursors = null;
            }),
            Player: Kotlin.createClass(function () {
              return [_.com.naosim.kotlinjsgame.phaser.PhaserLoop];
            }, function Player(id, sprite) {
              this.id_2i42ij$_0 = id;
              this.sprite = sprite;
              this.sprite.anchor.set(0.5);
              this.sprite.body.setSize(32, 32, 0, 0);
              this.sprite.body.maxAngular = 500;
              this.sprite.body.angularDrag = 50;
            }, /** @lends _.com.naosim.kotlinjsgame.domain.Player.prototype */ {
              id: {
                get: function () {
                  return this.id_2i42ij$_0;
                }
              },
              update_za3rmp$: function (global) {
                this.sprite.body.velocity.x = 0;
                this.sprite.body.velocity.y = 0;
                this.sprite.body.angularVelocity = 0;
                if (global.cursors.left.isDown) {
                  this.sprite.body.angularVelocity = -300;
                }
                 else if (global.cursors.right.isDown) {
                  this.sprite.body.angularVelocity = 300;
                }
                if (global.cursors.up.isDown) {
                  global.game.physics.arcade.velocityFromAngle(this.sprite.angle, 300, this.sprite.body.velocity);
                }
              },
              render_za3rmp$: function (global) {
              }
            })
          }),
          js: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.js */ {
            Main: Kotlin.createClass(null, function Main(phaser_0, gameFactory) {
              this.phaser = phaser_0;
              this.game = null;
              var map = {v: null};
              var coins = {v: null};
              var layer = {v: null};
              var collectCoin = _.com.naosim.kotlinjsgame.js.Main.Main$f;
              var preload = _.com.naosim.kotlinjsgame.js.Main.Main$f_0(this);
              var create = _.com.naosim.kotlinjsgame.js.Main.Main$f_1(this, map, layer, coins);
              var update = _.com.naosim.kotlinjsgame.js.Main.Main$f_2(this, layer, coins, collectCoin);
              var render = _.com.naosim.kotlinjsgame.js.Main.Main$f_3(this);
              this.game = gameFactory.create(preload, create, update, render);
              this.global = new _.com.naosim.kotlinjsgame.domain.Global(this.game);
            }, null, /** @lends _.com.naosim.kotlinjsgame.js.Main */ {
              Main$f: function (player, coin) {
                return coin.kill();
              },
              Main$f_0: function (this$Main) {
                return function () {
                  this$Main.game.load.tilemap(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.map.value, 'assets/tilemaps/maps/features_test.json', null, this$Main.phaser.Tilemap.TILED_JSON);
                  this$Main.game.load.image(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.ground_1x1.value, 'assets/tilemaps/tiles/ground_1x1.png');
                  this$Main.game.load.image(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.walls_1x2.value, 'assets/tilemaps/tiles/walls_1x2.png');
                  this$Main.game.load.image(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.tiles2.value, 'assets/tilemaps/tiles/tiles2.png');
                  this$Main.game.load.image(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.phaser.value, 'assets/sprites/arrow.png');
                  return this$Main.game.load.spritesheet(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.coin.value, 'assets/sprites/coin.png', 32, 32);
                };
              },
              Main$f_1: function (this$Main, closure$map, closure$layer, closure$coins) {
                return function () {
                  this$Main.global.cursors = this$Main.game.input.keyboard.createCursorKeys();
                  this$Main.global.updateRegister = new _.com.naosim.kotlinjsgame.domain.UpdateRegister(new _.com.naosim.kotlinjsgame.phaser.ID('-1'));
                  closure$map.v = this$Main.game.add.tilemap(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.map.value);
                  closure$map.v.addTilesetImage(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.ground_1x1.value);
                  closure$map.v.addTilesetImage(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.walls_1x2.value);
                  closure$map.v.addTilesetImage(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.tiles2.value);
                  closure$map.v.setCollisionBetween(1, 12);
                  closure$layer.v = closure$map.v.createLayer(_.com.naosim.kotlinjsgame.domain.ArrowGameKey.Tile_Layer_1.value);
                  closure$layer.v.resizeWorld();
                  this$Main.game.physics.startSystem(this$Main.phaser.Physics.ARCADE);
                  closure$coins.v = this$Main.game.add.group();
                  closure$coins.v.enableBody = true;
                  closure$map.v.createFromObjects('Object Layer 1', 34, 'coin', 0, true, false, closure$coins.v);
                  closure$coins.v.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4, 5], 10, true);
                  closure$coins.v.callAll('animations.play', 'animations', 'spin');
                  var sprite = this$Main.game.add.sprite(260, 100, _.com.naosim.kotlinjsgame.domain.ArrowGameKey.phaser.value);
                  this$Main.game.physics.arcade.enable(sprite);
                  this$Main.player = new _.com.naosim.kotlinjsgame.domain.Player(new _.com.naosim.kotlinjsgame.phaser.ID('player'), sprite);
                  this$Main.global.updateRegister.register_xbudgp$(this$Main.player);
                  return this$Main.game.camera.follow(sprite);
                };
              },
              Main$f_2: function (this$Main, closure$layer, closure$coins, closure$collectCoin) {
                return function () {
                  this$Main.game.physics.arcade.collide(this$Main.player.sprite, closure$layer.v);
                  this$Main.game.physics.arcade.overlap(this$Main.player.sprite, closure$coins.v, closure$collectCoin, null, this$Main.game);
                  this$Main.global.updateRegister.update_za3rmp$(this$Main.global);
                };
              },
              Main$f_3: function (this$Main) {
                return function () {
                  this$Main.game.debug.body(this$Main.player.sprite);
                  this$Main.global.updateRegister.render_za3rmp$(this$Main.global);
                };
              }
            })
          }),
          main: function (args) {
            Kotlin.println('Hello JavaScript!');
          },
          phaser: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.phaser */ {
            GameFactory: Kotlin.createTrait(null),
            Sprite: Kotlin.createTrait(function () {
              return [_.com.naosim.kotlinjsgame.phaser.Point];
            }),
            GameKey: Kotlin.createTrait(null),
            ID: Kotlin.createClass(null, function ID(value) {
              this.value = value;
            }, /** @lends _.com.naosim.kotlinjsgame.phaser.ID.prototype */ {
              component1: function () {
                return this.value;
              },
              copy_61zpoe$: function (value) {
                return new _.com.naosim.kotlinjsgame.phaser.ID(value === void 0 ? this.value : value);
              },
              toString: function () {
                return 'ID(value=' + Kotlin.toString(this.value) + ')';
              },
              hashCode: function () {
                var result = 0;
                result = result * 31 + Kotlin.hashCode(this.value) | 0;
                return result;
              },
              equals_za3rmp$: function (other) {
                return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
              }
            }),
            PhaserLoop: Kotlin.createTrait(null),
            PhaserLifeCycle: Kotlin.createTrait(function () {
              return [_.com.naosim.kotlinjsgame.phaser.PhaserLoop];
            }),
            Point: Kotlin.createTrait(null),
            PhysicsBody: Kotlin.createTrait(function () {
              return [_.com.naosim.kotlinjsgame.phaser.Point];
            }),
            velocity: Kotlin.createTrait(function () {
              return [_.com.naosim.kotlinjsgame.phaser.Point];
            }),
            Acceleration: Kotlin.createTrait(function () {
              return [_.com.naosim.kotlinjsgame.phaser.Point];
            }),
            Tilemap: Kotlin.createTrait(null),
            Physics: Kotlin.createTrait(null),
            PhaserStatic: Kotlin.createTrait(null)
          })
        })
      })
    })
  });
  Kotlin.defineModule('app', _);
  _.com.naosim.kotlinjsgame.main([]);
  return _;
}(kotlin);
