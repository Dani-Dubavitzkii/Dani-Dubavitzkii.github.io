"use strict";

$(document).ready(function () {
  $('.btn').click(function () {
    $(this).next().children('p').slideToggle(500);
    /* if($(this).next().children('p').is(':visible')){
    	$(this).attr('class', 'btn-active');
    } else{
    	$(this).removeAttr('class').attr('class', 'btn');
    } */
  });
});