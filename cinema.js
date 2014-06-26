/* global constants */
var PANEL_X = 30;       // amount of LEDs on the X axis
var PANEL_Y = 15;       // amount of LEDs on the Y axis

var CEILING_X = 3;      // amount of panels on the X axis
var CEILING_Y = 4;      // amount of panels on the Y axis

var CURRENT_COLOR = '#000000';


$(document).ready(function() {
    initCeiling();
});


/* initialize the ceiling */
function initCeiling() {
    for (i = 1; i <= CEILING_X * CEILING_Y; i++) {
        createPanel(i);
    }
}


/* Creates one panel */
function createPanel(plid) {
    panel = $('<div class="panel"></div>').addClass('panel-' + plid);
    $(panel).appendTo('#ceiling');
    
    for (k = 1; k <= PANEL_X * PANEL_Y; k++) {
        createLED(panel, k);
    }
    
};

/* Create an LED */
function createLED(panel, ledID) {
    led = $('<div class="led"></div>').addClass('led-' + ledID);
    $(led).appendTo(panel);
}



/* Bind touchMove Event */
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    elem = document.elementFromPoint(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    if ($(elem).hasClass('led')) {
        $(elem).css('background-color', 'black');
    }
}, false);