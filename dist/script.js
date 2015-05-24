var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery'), require('underscore'), require('backbone.marionette')) : typeof define === 'function' && define.amd ? define(['jquery', 'underscore', 'backbone.marionette'], factory) : factory(global.$, global._, global.Mn);
})(this, function ($, _, Mn) {
  'use strict';

  var CustomView = (function (_Mn$ItemView) {

    // super can be used to call the original CustomView's constructor
    // This is substantially prettier than the alternative:
    // `Mn.ItemView.prototype.constructor.apply(this, arguments);`

    function CustomView() {
      _classCallCheck(this, CustomView);

      // ...do some custom stuff here...

      _get(Object.getPrototypeOf(CustomView.prototype), 'constructor', this).call(this);
    }

    _inherits(CustomView, _Mn$ItemView);

    _createClass(CustomView, [{
      key: 'serializeData',

      // Super can also be used to get individual class methods. Neato.
      value: function serializeData() {
        var originalData = _get(Object.getPrototypeOf(CustomView.prototype), 'serializeData', this).call(this);
        originalData.name = 'Custom View';
        return originalData;
      }
    }, {
      key: 'template',

      // Unfortunately, ES6 does not provide a way to set properties
      // on the prototype nor instance. Consequently, we can't just set
      // a template property as we normally might.
      // As a workaround, we can use getters and setters, as in the following
      // example, where I specify the template.
      // This limitation is the primary reason why many people will not choose
      // to use ES6 classes, I imagine.
      get: function () {
        return _.template('<%- name %> – Testing out ES6 Classes');
      }
    }], [{
      key: 'whatever',

      // We can, however, place static methods.
      // This will be accessed via `CustomView.whatever()`
      value: function whatever() {
        return 'Yes you can!';
      }
    }]);

    return CustomView;
  })(Mn.ItemView);

  var customView = new CustomView();

  // We render it and attach it to the body.
  customView.render();
  $('body').append(customView.el);

  // Log the result of the static method
  // console.log('Can I execute a static method?', CustomView.whatever());
});
//# sourceMappingURL=./script.js.map