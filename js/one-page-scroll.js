"use strict";var sections=$("section"),display=$(".maincontent"),mobileDetect=new MobileDetect(window.navigator.userAgent),isMobile=mobileDetect.mobile(),inScroll=!1;sections.first().addClass("active");var viewportScroller=function(){var e=sections.filter(".active"),t=e.next(),n=e.prev();return{next:function(){t.length&&performTransition(t.index())},prev:function(){n.length&&performTransition(n.index())}}},performTransition=function(e){var t,n,i,r=$(".fixed-menu__item");!1===inScroll&&(inScroll=!0,t=-100*e,n=sections.eq(e).attr("data-sidemenu-theme"),i=$(".fixed-menu"),"dark"==n?i.addClass("fixed-menu--dark"):i.removeClass("fixed-menu--dark"),display.css({transform:"translateY(".concat(t,"%)")}),sections.eq(e).addClass("active").siblings().removeClass("active"),setTimeout(function(){inScroll=!1,$(r).removeClass("fixed-menu__item--active"),r.eq(e).addClass("fixed-menu__item--active")},1300))};$(window).on("wheel",function(e){var t=e.originalEvent.deltaY,e=viewportScroller();0<t&&e.next(),t<0&&e.prev()}),$(window).on("keydown",function(e){var t=e.originalEvent.keyCode,n=e.target.tagName.toLowerCase(),e=viewportScroller();"input"!==n&&"textarea"!==n&&(40===t&&e.next(),38===t&&e.prev())}),$(".wrapper").on("touchmove",function(e){return e.preventDefault()}),$("[data-scroll-to]").click(function(e){e.preventDefault();e=$(e.currentTarget).attr("data-scroll-to"),e=$("[data-section-id=".concat(e,"]"));performTransition(e.index())}),isMobile&&$("body").swipe({swipe:function(e,t){viewportScroller()["down"===t?"prev":"up"===t?"next":""]()}});