if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
var app = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      naosim: Kotlin.definePackage(null, /** @lends _.com.naosim */ {
        kotlinjsgame: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame */ {
          ap: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.ap */ {
            MainService: Kotlin.createClass(null, function MainService(gameRepository) {
              this.gameRepository = gameRepository;
            }, /** @lends _.com.naosim.kotlinjsgame.ap.MainService.prototype */ {
              preload: function () {
                var $receiver = _.com.naosim.kotlinjsgame.domain.Assets.values();
                var tmp$2;
                for (tmp$2 = 0; tmp$2 !== $receiver.length; ++tmp$2) {
                  var element = $receiver[tmp$2];
                  this.gameRepository.load(element);
                }
              },
              create: function () {
                this.ship = new _.com.naosim.kotlinjsgame.domain.lib.SpriteModel(new _.com.naosim.kotlinjsgame.domain.lib.Physics(new _.com.naosim.kotlinjsgame.domain.lib.Position(320, 500), new _.com.naosim.kotlinjsgame.domain.lib.Velocity(0, 0), new _.com.naosim.kotlinjsgame.domain.lib.Accel(0, 0)), _.com.naosim.kotlinjsgame.domain.Assets.ship, _.com.naosim.kotlinjsgame.domain.lib.PhysicsEnable.enable);
                this.gameRepository.init(this.ship);
              },
              update: function (context) {
                var x;
                if (context.cursors.left.isDown) {
                  x = -200;
                }
                 else if (context.cursors.right.isDown) {
                  x = 200;
                }
                 else {
                  x = 0;
                }
                var updateEvent = this.ship.physics.velocity.update_vux9f0$(x);
                this.gameRepository.update(updateEvent);
              }
            }, /** @lends _.com.naosim.kotlinjsgame.ap.MainService */ {
            })
          }),
          domain: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.domain */ {
            Assets: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function Assets(filename) {
              Assets.baseInitializer.call(this);
              this.filename = filename;
            }, function () {
              return {
                bullet: function () {
                  return new _.com.naosim.kotlinjsgame.domain.Assets('img/bullet.png');
                },
                ship: function () {
                  return new _.com.naosim.kotlinjsgame.domain.Assets('img/shmup-ship.png');
                }
              };
            }),
            lib: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.domain.lib */ {
              UpdateEventName: Kotlin.createTrait(null),
              D2UpdateEventName: Kotlin.createEnumClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.UpdateEventName, Kotlin.Enum];
              }, function D2UpdateEventName(value) {
                D2UpdateEventName.baseInitializer.call(this);
                this.value_p7d51p$_0 = value;
              }, function () {
                return {
                  position: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.D2UpdateEventName('position');
                  },
                  verocity: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.D2UpdateEventName('verocity');
                  },
                  accel: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.D2UpdateEventName('accel');
                  }
                };
              }, /** @lends _.com.naosim.kotlinjsgame.domain.lib.D2UpdateEventName.prototype */ {
                value: {
                  get: function () {
                    return this.value_p7d51p$_0;
                  }
                }
              }),
              UpdateEvent: Kotlin.createClass(null, function UpdateEvent(name, arg) {
                this.name = name;
                this.arg = arg;
              }),
              D2: Kotlin.createClass(null, function D2(x, y, updateEventName) {
                this.x_e5dzp7$_0 = x;
                this.y_e5dzp7$_0 = y;
                this.updateEventName = updateEventName;
              }, /** @lends _.com.naosim.kotlinjsgame.domain.lib.D2.prototype */ {
                update_vux9f0$: function (x, y) {
                  if (x === void 0)
                    x = null;
                  if (y === void 0)
                    y = null;
                  this.x_e5dzp7$_0 = x != null ? x : this.x_e5dzp7$_0;
                  this.y_e5dzp7$_0 = y != null ? y : this.y_e5dzp7$_0;
                  return new _.com.naosim.kotlinjsgame.domain.lib.UpdateEvent(this.updateEventName, new _.com.naosim.kotlinjsgame.domain.lib.D2(this.x_e5dzp7$_0, this.y_e5dzp7$_0, this.updateEventName));
                },
                getX: function () {
                  return this.x_e5dzp7$_0;
                },
                getY: function () {
                  return this.y_e5dzp7$_0;
                }
              }),
              Position: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.D2];
              }, function Position(x, y) {
                Position.baseInitializer.call(this, x, y, _.com.naosim.kotlinjsgame.domain.lib.D2UpdateEventName.position);
              }),
              Velocity: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.D2];
              }, function Velocity(x, y) {
                Velocity.baseInitializer.call(this, x, y, _.com.naosim.kotlinjsgame.domain.lib.D2UpdateEventName.verocity);
              }),
              Accel: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.D2];
              }, function Accel(x, y) {
                Accel.baseInitializer.call(this, x, y, _.com.naosim.kotlinjsgame.domain.lib.D2UpdateEventName.accel);
              }),
              Physics: Kotlin.createClass(null, function Physics(position, velocity, accel) {
                this.position = position;
                this.velocity = velocity;
                this.accel = accel;
              }),
              PhysicsEnable: Kotlin.createEnumClass(function () {
                return [Kotlin.Enum];
              }, function PhysicsEnable(isEnable) {
                PhysicsEnable.baseInitializer.call(this);
                this.isEnable = isEnable;
              }, function () {
                return {
                  enable: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.PhysicsEnable(true);
                  },
                  disable: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.PhysicsEnable(false);
                  }
                };
              }),
              SpriteModel: Kotlin.createClass(null, function SpriteModel(physics, assets, physicsEnable) {
                this.physics = physics;
                this.assets = assets;
                this.physicsEnable = physicsEnable;
              }),
              CursorType: Kotlin.createEnumClass(function () {
                return [Kotlin.Enum];
              }, function CursorType() {
                CursorType.baseInitializer.call(this);
              }, function () {
                return {
                  up: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.CursorType();
                  },
                  down: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.CursorType();
                  },
                  left: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.CursorType();
                  },
                  right: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.CursorType();
                  }
                };
              }),
              Cursor: Kotlin.createClass(null, function Cursor(type, isDown) {
                this.type = type;
                this.isDown = isDown;
              }),
              Cursors: Kotlin.createClass(null, function Cursors(up, down, left, right) {
                this.up = up;
                this.down = down;
                this.left = left;
                this.right = right;
              }),
              Context: Kotlin.createClass(null, function Context(cursors) {
                this.cursors = cursors;
              })
            })
          }),
          js: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.js */ {
            GameRepositoryPhaser: Kotlin.createClass(function () {
              return [_.com.naosim.kotlinjsgame.repository.GameRepository];
            }, function GameRepositoryPhaser(game, spriteMap) {
              this.game = game;
              this.spriteMap = spriteMap;
            }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.prototype */ {
              load: function (assets) {
                this.game.load.image(assets.name, assets.filename);
              },
              init: function (spriteModel) {
                var sprite = this.game.add.sprite(spriteModel.physics.position.getX(), spriteModel.physics.position.getY(), spriteModel.assets.name);
                this.spriteMap['ship'] = sprite;
                if (spriteModel.physicsEnable.isEnable) {
                  this.game.physics.arcade.enable(sprite);
                }
                sprite.body.velocity.x = spriteModel.physics.velocity.getX();
                sprite.body.velocity.y = spriteModel.physics.velocity.getY();
              },
              update: function (updateEvent) {
                var arg = updateEvent.arg;
                if (Kotlin.equals(updateEvent.name, _.com.naosim.kotlinjsgame.domain.lib.D2UpdateEventName.verocity)) {
                  this.spriteMap['ship'].body.velocity.x = arg.getX();
                  this.spriteMap['ship'].body.velocity.y = arg.getY();
                }
              }
            }),
            ContextFactory: Kotlin.createClass(null, function ContextFactory() {
            }, /** @lends _.com.naosim.kotlinjsgame.js.ContextFactory.prototype */ {
              create: function (leftIsDown, rightIsDown) {
                return new _.com.naosim.kotlinjsgame.domain.lib.Context(new _.com.naosim.kotlinjsgame.domain.lib.Cursors(new _.com.naosim.kotlinjsgame.domain.lib.Cursor(_.com.naosim.kotlinjsgame.domain.lib.CursorType.up, false), new _.com.naosim.kotlinjsgame.domain.lib.Cursor(_.com.naosim.kotlinjsgame.domain.lib.CursorType.down, false), new _.com.naosim.kotlinjsgame.domain.lib.Cursor(_.com.naosim.kotlinjsgame.domain.lib.CursorType.left, leftIsDown), new _.com.naosim.kotlinjsgame.domain.lib.Cursor(_.com.naosim.kotlinjsgame.domain.lib.CursorType.right, rightIsDown)));
              }
            })
          }),
          main: function (args) {
            Kotlin.println('Hello JavaScript!');
          },
          repository: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.repository */ {
            GameRepository: Kotlin.createTrait(null)
          })
        })
      })
    })
  });
  Kotlin.defineModule('app', _);
  _.com.naosim.kotlinjsgame.main([]);
  return _;
}(kotlin);

//@ sourceMappingURL=app.js.map
