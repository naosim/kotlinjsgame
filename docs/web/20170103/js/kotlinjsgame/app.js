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
            ShowPositionService: Kotlin.createClass(null, function ShowPositionService(alertJsRepository) {
              this.alertJsRepository = alertJsRepository;
            }, /** @lends _.com.naosim.kotlinjsgame.ap.ShowPositionService.prototype */ {
              invoke: function () {
                var p = new _.com.naosim.kotlinjsgame.domain.Position(40.5, 30.1);
                this.alertJsRepository.show_61zpoe$(p.x.toString() + ', ' + p.y);
              }
            })
          }),
          domain: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.domain */ {
            Position: Kotlin.createClass(null, function Position(x, y) {
              this.x = x;
              this.y = y;
            }, /** @lends _.com.naosim.kotlinjsgame.domain.Position.prototype */ {
              component1: function () {
                return this.x;
              },
              component2: function () {
                return this.y;
              },
              copy_lu1900$: function (x, y) {
                return new _.com.naosim.kotlinjsgame.domain.Position(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
              },
              toString: function () {
                return 'Position(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
              },
              hashCode: function () {
                var result = 0;
                result = result * 31 + Kotlin.hashCode(this.x) | 0;
                result = result * 31 + Kotlin.hashCode(this.y) | 0;
                return result;
              },
              equals_za3rmp$: function (other) {
                return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
              }
            })
          }),
          jsrepository: Kotlin.definePackage(null, /** @lends _.com.naosim.kotlinjsgame.jsrepository */ {
            AlertJsRepository: Kotlin.createTrait(null)
          }),
          main: function (args) {
            Kotlin.println('Hello JavaScript!');
          }
        })
      })
    })
  });
  Kotlin.defineModule('app', _);
  _.com.naosim.kotlinjsgame.main([]);
  return _;
}(kotlin);
