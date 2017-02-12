import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './main.css';

var graph = require('./graph.js');

Template.hello.onCreated(function() {
  this.autorun(() => {
    this.subscribe('NumberData');
  });
});

Template.hello.helpers({  
    'NumberData': function(){
        return NumberData.find()
    }
});

Template.hello.onRendered(function() {
    Deps.autorun(function() {
      graph.drawChart()
    });
});
