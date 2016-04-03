'use strict'

$(document).ready(function(){
    
//variables
    var $formOverlay = $('<div id="overlay"></div>').append($(".elephantslider"));
    
//Add overlay to body
    $("body").append($formOverlay);

// show elephant carousel
    $('.elephant').click(function() {
        event.preventDefault();
        $('.elephantslider').show(); 
    });
    
    $('.elephant').click(function (event) {
        $formOverlay.show();
    });
    
    
//When overlay is double clicked, hide overlay
    $formOverlay.dblclick(function () {
    $formOverlay.hide();
  });  
 });   