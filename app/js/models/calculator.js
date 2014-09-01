var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Calculator = Backbone.Model.extend({
  defaults: {
    Title: 'The meeny miny mo calculator',
    totalNums: '',
    mean: '',
    median: '',
    mode: []
  },

  findMean: function() {
    var data = this.get('inputArray');
    this.set({totalNums: data.length});
    var sum = 0;
    for(var i = 0; i < data.length; i++) sum += Number(data[i]);
    this.set({mean: sum / Number(data.length)});
  },

  findMedian: function() {
    var data = this.get('inputArray');
    data.sort(function(a,b) {return a-b});

    var middle = Math.floor(data.length / 2);

    if(data.length % 2 === 0) {
      this.set({median: (Number(data[middle - 1]) + Number(data[middle])) / 2});
      console.log("array is even");
    } else {
      this.set({median: (Number(data[middle]))});
      console.log("array is odd");
    }
  },

  findMode: function() {
    var data = this.get('inputArray');
    data.sort(function(a, b) {return a-b;});
    var result = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i + 1] === data[i]) {
        result.push(data[i]);
      }
    }

    var unique = result.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });

    if (result.length < 1) {
      this.set({mode: data});
    } else {
      this.set({mode: unique});
    }
  }
});

module.exports = Calculator;
