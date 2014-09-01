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

  findMode: function () {
    var data = this.get('inputArray');
    data.sort();

    var counter = [];
    var mode = [];
    var max = 0;

    for (var i in data) {
      if (counter[data[i]] === undefined)
        counter[data[i]] = 0;
        counter[data[i]]++;

        if (counter[data[i]] == max) {
          mode.push(data[i]);
        }
        if (counter[data[i]] > max) {
          max = counter[data[i]];
          mode = [data[i]];
        }
      }
      this.set({mode: mode});
    }
  });

  module.exports = Calculator;
