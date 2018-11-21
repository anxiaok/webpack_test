//兼容ie8
require('es5-shim');  
require('es5-shim/es5-sham');
require('console-polyfill');


const cube = require('./main.js');
require('./style.css');

if(process.env.NODE_ENV !== 'production'){
	console.log('look like we are in development mode!');
}

function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
      'Hello webpack!',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
  }
$(function(){
	document.body.appendChild(component());
})
  