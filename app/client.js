var $ = require('jquery');
var Calculator = require('./js/models/calculator');
var FormView = require('./js/views/formView');

var calculator = new Calculator;

var formView = new FormView({model: calculator});

$('#backbone').append(formView.el);
