"use strict";var slideActive=1,slideCount=$("#slider__items").children().length,translateWidth=0;function nextSlide(){slideActive==slideCount||slideActive<=0||slideCount<slideActive?($("#slider__items").css("transform","translate(0, 0)"),slideActive=1):(translateWidth=-$("#slider__items").width()*slideActive,$("#slider__items").css({transform:"translate("+translateWidth+"px, 0)"}),slideActive++)}function prevSlide(){1==slideActive||slideActive<=0||slideCount<slideActive?(translateWidth=-$("#slider__items").width()*(slideCount-1),$("#slider__items").css({transform:"translate("+translateWidth+"px, 0)"}),slideActive=slideCount):(translateWidth=-$("#slider__items").width()*(slideActive-2),$("#slider__items").css({transform:"translate("+translateWidth+"px, 0)"}),slideActive--)}$(document).ready(function(){$("#left").click(function(t){t.preventDefault(),prevSlide()}),$("#right").click(function(t){t.preventDefault(),nextSlide()})});