/* global constants */
var PANEL_X = 30;       // amount of LEDs on the X axis
var PANEL_Y = 15;       // amount of LEDs on the Y axis

var CEILING_X = 3;      // amount of panels on the X axis
var CEILING_Y = 4;      // amount of panels on the Y axis

var CURRENT_COLOR = '#000000';

var COLORS = ['#FFFFFF', '#dcdcdc', '#8c8c8c', '#414141', '#000000',
              '#fdb913', '#f68b28', '#f26531',
              '#1ab5a8', '#07978b', '#007c77',
              '#d54361'];


$(document).ready(function() {
    initCeiling();
    createColorTiles();
    $('.colortile').on('click', function() {
        CURRENT_COLOR = $(this).data('color');
        $('.colortile').removeClass('selected');
        $(this).addClass('selected');
        console.log('hi');
    });
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
        $(elem).css('background-color', CURRENT_COLOR);
    }
}, false);


/* Toolbox */
function createColorTiles() {
    COLORS.forEach(function(color) {
        colortile = $('<div class="colortile"></div>').data('color', color);
        $(colortile).css('background-color', color);
        $(colortile).appendTo('#colors');
    });
}



