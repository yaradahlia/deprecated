"use strict";

function isUndefined(obj) {
     
   return obj();
}

var x = {};

//console.debug(isUndefined(x));

console.debug(isUndefined(function() {return xxxx}));


