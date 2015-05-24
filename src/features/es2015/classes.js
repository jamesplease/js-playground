import $ from 'jquery';
import _ from 'underscore';
import Mn from 'backbone.marionette';

// Backbone inheritence is mostly compatible
// with ESt6 classes, so we can use ES6 `extend`
// instead of Backbone's built-in extend
class CustomView extends Mn.ItemView {

  // super can be used to call the original CustomView's constructor
  // This is substantially prettier than the alternative:
  // `Mn.ItemView.prototype.constructor.apply(this, arguments);`
  constructor() {
    
    // ...do some custom stuff here...

    super();
  }
  
  // Super can also be used to get individual class methods. Neato.
  serializeData() {
    var originalData = super.serializeData();
    originalData.name = 'Custom View';
    return originalData;
  }

  // Unfortunately, ES6 does not provide a way to set properties
  // on the prototype nor instance. Consequently, we can't just set
  // a template property as we normally might.
  // As a workaround, we can use getters and setters, as in the following
  // example, where I specify the template.
  // This limitation is the primary reason why many people will not choose
  // to use ES6 classes, I imagine.
  get template() {
    return _.template('<%- name %> – Testing out ES6 Classes');
  }

  // We can, however, place static methods.
  // This will be accessed via `CustomView.whatever()`
  static whatever() {
    return 'Yes you can!';
  }
}

var customView = new CustomView();

// We render it and attach it to the body.
customView.render();
$('body').append(customView.el);

// Log the result of the static method
// console.log('Can I execute a static method?', CustomView.whatever());