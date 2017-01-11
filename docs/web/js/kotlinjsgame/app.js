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
              var tmp$1;
              this.bulletEntities = Array.isArray(tmp$1 = Kotlin.nullArray(0)) ? tmp$1 : Kotlin.throwCCE();
            }, /** @lends _.com.naosim.kotlinjsgame.ap.MainService.prototype */ {
              preload: function () {
                var $receiver = _.com.naosim.kotlinjsgame.domain.Assets.values();
                var tmp$2;
                for (tmp$2 = 0; tmp$2 !== $receiver.length; ++tmp$2) {
                  var element = $receiver[tmp$2];
                  this.gameRepository.load_my0vsv$(element);
                }
              },
              create: function () {
                this.shipEntity = this.gameRepository.createSpriteEntity_jcgg89$(new _.com.naosim.kotlinjsgame.domain.shooting.ShipConfig(), Kotlin.getCallableRefForConstructor(_.com.naosim.kotlinjsgame.domain.shooting.ShipEntity));
              },
              update_v9pim0$: function (context) {
                this.shipEntity.update_q1bltq$(context, _.com.naosim.kotlinjsgame.ap.MainService.update_v9pim0$f(this));
                var $receiver = this.bulletEntities;
                var tmp$2;
                for (tmp$2 = 0; tmp$2 !== $receiver.length; ++tmp$2) {
                  var element = $receiver[tmp$2];
                  element.update_v9pim0$(context);
                }
                var $receiver_0 = this.bulletEntities;
                var destination = new Kotlin.ArrayList();
                var tmp$3;
                for (tmp$3 = 0; tmp$3 !== $receiver_0.length; ++tmp$3) {
                  var element_0 = $receiver_0[tmp$3];
                  if (element_0.sprite.alive) {
                    destination.add_za3rmp$(element_0);
                  }
                }
                this.bulletEntities = Kotlin.copyToArray(destination);
              }
            }, /** @lends _.com.naosim.kotlinjsgame.ap.MainService */ {
              update_v9pim0$f: function (this$MainService) {
                return function (it) {
                  var tmp$0 = this$MainService;
                  var $receiver = this$MainService.bulletEntities;
                  var element = this$MainService.gameRepository.createSpriteEntity_jcgg89$(it, Kotlin.getCallableRefForConstructor(_.com.naosim.kotlinjsgame.domain.shooting.BulletEntity));
                  tmp$0.bulletEntities = $receiver.concat([element]);
                };
              }
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
              D2: Kotlin.createTrait(null),
              Position: Kotlin.createTrait(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.D2];
              }),
              Velocity: Kotlin.createTrait(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.D2];
              }),
              Accel: Kotlin.createTrait(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.D2];
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
              SpriteEvent: Kotlin.createEnumClass(function () {
                return [Kotlin.Enum];
              }, function SpriteEvent() {
                SpriteEvent.baseInitializer.call(this);
              }, function () {
                return {
                  onKilled: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.SpriteEvent();
                  }
                };
              }),
              Sprite: Kotlin.createTrait(null),
              ID: Kotlin.createClass(null, function ID(value) {
                this.value = value;
              }),
              SpriteConfig: Kotlin.createTrait(null),
              SpriteModelEntity: Kotlin.createTrait(null),
              ButtonType: Kotlin.createEnumClass(function () {
                return [Kotlin.Enum];
              }, function ButtonType() {
                ButtonType.baseInitializer.call(this);
              }, function () {
                return {
                  up: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.ButtonType();
                  },
                  down: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.ButtonType();
                  },
                  left: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.ButtonType();
                  },
                  right: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.ButtonType();
                  },
                  a: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.ButtonType();
                  },
                  b: function () {
                    return new _.com.naosim.kotlinjsgame.domain.lib.ButtonType();
                  }
                };
              }),
              Button: Kotlin.createClass(null, function Button(type, isDown, isDownStart) {
                if (isDownStart === void 0)
                  isDownStart = false;
                this.type = type;
                this.isDown = isDown;
                this.isDownStart = isDownStart;
              }),
              Buttons: Kotlin.createClass(null, function Buttons(up, down, left, right, a) {
                this.up = up;
                this.down = down;
                this.left = left;
                this.right = right;
                this.a = a;
              }),
              Context: Kotlin.createClass(null, function Context(buttons) {
                this.buttons = buttons;
              })
            }),
            shooting: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.domain.shooting */ {
              BulletConfig: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.SpriteConfig];
              }, function BulletConfig(x, y) {
                this.x = x;
                this.y = y;
                this.assets_uqjykp$_0 = _.com.naosim.kotlinjsgame.domain.Assets.bullet;
                this.physicsEnable_uqjykp$_0 = _.com.naosim.kotlinjsgame.domain.lib.PhysicsEnable.enable;
              }, /** @lends _.com.naosim.kotlinjsgame.domain.shooting.BulletConfig.prototype */ {
                assets: {
                  get: function () {
                    return this.assets_uqjykp$_0;
                  }
                },
                physicsEnable: {
                  get: function () {
                    return this.physicsEnable_uqjykp$_0;
                  }
                }
              }),
              BulletEntity: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.SpriteModelEntity];
              }, function BulletEntity(id, sprite, spriteConfig) {
                this.id_bbg88o$_0 = id;
                this.sprite_bbg88o$_0 = sprite;
                this.spriteConfig_bbg88o$_0 = spriteConfig;
                this.sprite.physics.position.update_vux9f0$(this.spriteConfig.x, this.spriteConfig.y);
                this.sprite.physics.velocity.update_vux9f0$(null, -300);
                this.sprite.addEventListener_7f1r40$(_.com.naosim.kotlinjsgame.domain.lib.SpriteEvent.onKilled, _.com.naosim.kotlinjsgame.domain.shooting.BulletEntity.BulletEntity$f);
              }, /** @lends _.com.naosim.kotlinjsgame.domain.shooting.BulletEntity.prototype */ {
                id: {
                  get: function () {
                    return this.id_bbg88o$_0;
                  }
                },
                sprite: {
                  get: function () {
                    return this.sprite_bbg88o$_0;
                  }
                },
                spriteConfig: {
                  get: function () {
                    return this.spriteConfig_bbg88o$_0;
                  }
                },
                kill: function () {
                  this.sprite.kill();
                },
                update_v9pim0$: function (context) {
                  if (!this.sprite.inCamera) {
                    this.sprite.kill();
                  }
                }
              }, /** @lends _.com.naosim.kotlinjsgame.domain.shooting.BulletEntity */ {
                BulletEntity$f: function () {
                  Kotlin.println('killed');
                }
              }),
              ShipConfig: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.SpriteConfig];
              }, function ShipConfig() {
                this.assets_iuod1r$_0 = _.com.naosim.kotlinjsgame.domain.Assets.ship;
                this.physicsEnable_iuod1r$_0 = _.com.naosim.kotlinjsgame.domain.lib.PhysicsEnable.enable;
              }, /** @lends _.com.naosim.kotlinjsgame.domain.shooting.ShipConfig.prototype */ {
                assets: {
                  get: function () {
                    return this.assets_iuod1r$_0;
                  }
                },
                physicsEnable: {
                  get: function () {
                    return this.physicsEnable_iuod1r$_0;
                  }
                }
              }),
              ShipEntity: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.SpriteModelEntity];
              }, function ShipEntity(id, sprite, spriteConfig) {
                this.id_n7btrm$_0 = id;
                this.sprite_n7btrm$_0 = sprite;
                this.spriteConfig_n7btrm$_0 = spriteConfig;
                this.sprite.physics.position.update_vux9f0$(320, 500);
              }, /** @lends _.com.naosim.kotlinjsgame.domain.shooting.ShipEntity.prototype */ {
                id: {
                  get: function () {
                    return this.id_n7btrm$_0;
                  }
                },
                sprite: {
                  get: function () {
                    return this.sprite_n7btrm$_0;
                  }
                },
                spriteConfig: {
                  get: function () {
                    return this.spriteConfig_n7btrm$_0;
                  }
                },
                kill: function () {
                  this.sprite.kill();
                },
                update_q1bltq$: function (context, onCreateBullet) {
                  var x;
                  var inCamera = this.sprite.inCamera;
                  if (!inCamera) {
                    x = 0;
                  }
                   else if (context.buttons.left.isDown) {
                    x = -200;
                  }
                   else if (context.buttons.right.isDown) {
                    x = 200;
                  }
                   else {
                    x = 0;
                  }
                  this.sprite.physics.velocity.update_vux9f0$(x);
                  if (context.buttons.a.isDownStart) {
                    onCreateBullet(new _.com.naosim.kotlinjsgame.domain.shooting.BulletConfig(this.sprite.physics.position.getX(), this.sprite.physics.position.getY()));
                  }
                }
              })
            })
          }),
          js: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.js */ {
            GameRepositoryPhaser: Kotlin.createClass(function () {
              return [_.com.naosim.kotlinjsgame.repository.GameRepository];
            }, function GameRepositoryPhaser(game) {
              this.game = game;
              this.idCount = 0;
            }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.prototype */ {
              load_my0vsv$: function (assets) {
                Kotlin.println(assets.name + ' ' + assets.filename);
                this.game.load.image(assets.name, assets.filename);
              },
              createSpriteEntity_jcgg89$: function (spriteConfig, factory) {
                var id = spriteConfig.assets.name + '_' + this.idCount++;
                var spritePhaser = this.game.add.sprite(0, 0, spriteConfig.assets.name);
                if (spriteConfig.physicsEnable.isEnable) {
                  this.game.physics.arcade.enable(spritePhaser);
                }
                var p = new _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f(spritePhaser);
                var v = new _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f_0(spritePhaser);
                var a = new _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f_1();
                return factory(new _.com.naosim.kotlinjsgame.domain.lib.ID(id), new _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f_2(spritePhaser, p, v, a), spriteConfig);
              }
            }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser */ {
              createSpriteEntity$f: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.Position];
              }, function (closure$spritePhaser_0) {
                this.closure$spritePhaser_0 = closure$spritePhaser_0;
              }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f.prototype */ {
                getX: function () {
                  return this.closure$spritePhaser_0.body.position.x;
                },
                getY: function () {
                  return this.closure$spritePhaser_0.body.position.y;
                },
                update_vux9f0$: function (x, y) {
                  if (x === void 0)
                    x = null;
                  if (y === void 0)
                    y = null;
                  if (x != null) {
                    this.closure$spritePhaser_0.x = x;
                  }
                  if (y != null) {
                    this.closure$spritePhaser_0.y = y;
                  }
                }
              }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f */ {
              }),
              createSpriteEntity$f_0: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.Velocity];
              }, function (closure$spritePhaser_0) {
                this.closure$spritePhaser_0 = closure$spritePhaser_0;
              }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f_0.prototype */ {
                getX: function () {
                  return this.closure$spritePhaser_0.body.velocity.x;
                },
                getY: function () {
                  return this.closure$spritePhaser_0.body.velocity.y;
                },
                update_vux9f0$: function (x, y) {
                  if (x === void 0)
                    x = null;
                  if (y === void 0)
                    y = null;
                  if (x != null) {
                    this.closure$spritePhaser_0.body.velocity.x = x;
                  }
                  if (y != null) {
                    this.closure$spritePhaser_0.body.velocity.y = y;
                  }
                }
              }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f_0 */ {
              }),
              createSpriteEntity$f_1: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.Accel];
              }, function () {
              }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f_1.prototype */ {
                getX: function () {
                  throw new Kotlin.UnsupportedOperationException();
                },
                getY: function () {
                  throw new Kotlin.UnsupportedOperationException();
                },
                update_vux9f0$: function (x, y) {
                  if (x === void 0)
                    x = null;
                  if (y === void 0)
                    y = null;
                  throw new Kotlin.UnsupportedOperationException();
                }
              }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f_1 */ {
              }),
              createSpriteEntity$f_2: Kotlin.createClass(function () {
                return [_.com.naosim.kotlinjsgame.domain.lib.Sprite];
              }, function (closure$spritePhaser_0, closure$p_0, closure$v_0, closure$a_0) {
                this.closure$spritePhaser_0 = closure$spritePhaser_0;
                this.physics_frgetz$_0 = new _.com.naosim.kotlinjsgame.domain.lib.Physics(closure$p_0, closure$v_0, closure$a_0);
              }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f_2.prototype */ {
                alive: {
                  get: function () {
                    return this.closure$spritePhaser_0.alive;
                  }
                },
                addEventListener_7f1r40$: function (spriteEvent, action) {
                  if (spriteEvent === _.com.naosim.kotlinjsgame.domain.lib.SpriteEvent.onKilled) {
                    this.closure$spritePhaser_0.events.onKilled.addOnce(_.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f_2.addEventListener_7f1r40$f(action));
                    return;
                  }
                  throw new Kotlin.UnsupportedOperationException('not implemented');
                },
                physics: {
                  get: function () {
                    return this.physics_frgetz$_0;
                  }
                },
                inCamera: {
                  get: function () {
                    return this.closure$spritePhaser_0.inCamera;
                  }
                },
                kill: function () {
                  this.closure$spritePhaser_0.kill();
                }
              }, /** @lends _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser.createSpriteEntity$f_2 */ {
                addEventListener_7f1r40$f: function (closure$action) {
                  return function () {
                    closure$action();
                  };
                }
              })
            }),
            ContextFactory: Kotlin.createClass(null, function ContextFactory() {
              this.lastLeftIsDown = false;
              this.lastRightIsDown = false;
              this.lastAIsDown = false;
            }, /** @lends _.com.naosim.kotlinjsgame.js.ContextFactory.prototype */ {
              create: function (leftIsDown, rightIsDown, aIsDown) {
                var context = new _.com.naosim.kotlinjsgame.domain.lib.Context(new _.com.naosim.kotlinjsgame.domain.lib.Buttons(new _.com.naosim.kotlinjsgame.domain.lib.Button(_.com.naosim.kotlinjsgame.domain.lib.ButtonType.up, false, false), new _.com.naosim.kotlinjsgame.domain.lib.Button(_.com.naosim.kotlinjsgame.domain.lib.ButtonType.down, false, false), new _.com.naosim.kotlinjsgame.domain.lib.Button(_.com.naosim.kotlinjsgame.domain.lib.ButtonType.left, leftIsDown, leftIsDown && !this.lastLeftIsDown), new _.com.naosim.kotlinjsgame.domain.lib.Button(_.com.naosim.kotlinjsgame.domain.lib.ButtonType.right, rightIsDown, rightIsDown && !this.lastRightIsDown), new _.com.naosim.kotlinjsgame.domain.lib.Button(_.com.naosim.kotlinjsgame.domain.lib.ButtonType.a, aIsDown, aIsDown && !this.lastAIsDown)));
                this.lastLeftIsDown = leftIsDown;
                this.lastRightIsDown = rightIsDown;
                this.lastAIsDown = aIsDown;
                return context;
              }
            }),
            Main: Kotlin.createClass(null, function Main(Phaser, phaserFactory) {
              this.Phaser = Phaser;
              this.game = null;
              this.aButton = null;
              this.cursors = null;
              this.p = _.com.naosim.kotlinjsgame.js.Main.p$f;
              var contextFactory = new _.com.naosim.kotlinjsgame.js.ContextFactory();
              this.game = phaserFactory(_.com.naosim.kotlinjsgame.js.Main.Main$f(this), _.com.naosim.kotlinjsgame.js.Main.Main$f_0(this), _.com.naosim.kotlinjsgame.js.Main.Main$f_1(contextFactory, this));
              this.mainService = new _.com.naosim.kotlinjsgame.ap.MainService(new _.com.naosim.kotlinjsgame.js.GameRepositoryPhaser(this.game));
            }, null, /** @lends _.com.naosim.kotlinjsgame.js.Main */ {
              p$f: function () {
                Kotlin.println('hoge');
              },
              Main$f: function (this$Main) {
                return function () {
                  this$Main.mainService.preload();
                };
              },
              Main$f_0: function (this$Main) {
                return function () {
                  this$Main.aButton = this$Main.game.input.keyboard.addKey(this$Main.Phaser.KeyCode.SPACEBAR);
                  this$Main.cursors = this$Main.game.input.keyboard.createCursorKeys();
                  this$Main.mainService.create();
                };
              },
              Main$f_1: function (closure$contextFactory, this$Main) {
                return function () {
                  var context = closure$contextFactory.create(this$Main.cursors.left.isDown, this$Main.cursors.right.isDown, this$Main.aButton.isDown);
                  this$Main.mainService.update_v9pim0$(context);
                };
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
