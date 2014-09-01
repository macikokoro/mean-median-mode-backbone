var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'div',

  initialize: function () {
    this.model.on('change', this.render, this);
      this.render();
  },

  render: function () {
    var template = require('../templates/form-template.hbs');
    var data = this.model.attributes;
    this.$el.html(template(data));
    return this;
  },
  events: {
    'submit': 'calculate',
    'click #run': 'calculate',
  },

  calculate: function(e) {
    e.preventDefault();
    this.model.set({inputArray: this.$('#input').val().split(' ')});
    this.model.findMean();
    this.model.findMedian();
    this.model.findMode();
  }
});
