"use strict";var button=document.querySelectorAll(".team__name"),accordion=document.querySelectorAll(".team__accordion");$(button).each(function(){$(this).click(function(t){t.preventDefault(),$(accordion).not(t.target.nextElementSibling).hasClass("team__accordion--open")&&$(accordion).removeClass("team__accordion--open"),$(t.target.nextElementSibling).toggleClass("team__accordion--open"),$(button).not(this).hasClass("triangle-up")&&$(button).removeClass("triangle-up"),$(this).toggleClass("triangle-up")})});