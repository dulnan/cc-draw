/* global constants */
var PANEL_X = 30;       // amount of LEDs on the X axis
var PANEL_Y = 15;       // amount of LEDs on the Y axis

var CEILING_X = 3;      // amount of panels on the X axis
var CEILING_Y = 4;      // amount of panels on the Y axis




/* Creates one plate */
function createPlate() {
    $('#ceiling').add('div').addClass('plate');
};

$(document).ready(function() {
    for (i = 0; i < 72; i++) {
        createPlate();
    }
});