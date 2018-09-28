import '../imports/startup/both';
import '../imports/startup/client';
import '../imports/ui/route.js'
import {Meteor} from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import App from '../imports/ui/App.js';

Meteor.startup(()=>{

render(<App />,document.getElementById('target'));
      
});

$('.datepicker').pickadate({
    min: new Date(),
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    firstDay: 1
  });


 $('select').material_select();


  var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
   start: [20, 80],
   connect: true,
   step: 1,
   orientation: 'horizontal',
   range: {
     'min': 0,
     'max': 100000000
   },
   format: wNumb({
     decimals: 0
   })
  });

  $('.tabs').ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
  });
 

