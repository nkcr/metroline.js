!function(){this.Metroline=function(){function i(){d=Math.max($(document).height(),$(window).height()),r=window.innerHeight,h=r/d,w=d/r,u=h*r,f=u/3,p.css("height",u)}function o(){p.css("top",h*$(window).scrollTop()),c()}function n(i){if(C){var o=i.clientY-g;0!=o&&$(window).scrollTop(w*(b+o))}}function t(i){C=!0,g=i.clientY,b=p.position().top,v.addClass("unselectable")}function s(){C=!1,v.removeClass("unselectable")}function e(){m.find("li").remove(),$("section").each(l)}function l(){var i=r*($(this).position().top+$(this).height()/2)/d;m.append('<li style="top: '+i+'px"><a href="#'+$(this).attr("id")+'">'+$(this).data("title")+"</a></li>")}function c(){m.find("li").each(a)}function a(){var i=$(this).position().top,o=h*$(window).scrollTop();o+u>i&&i>o?$(this).addClass("active"):$(this).removeClass("active")}var d,r,h,w,u,f,p=$("#scrollcursor"),v=$("body"),m=$("#scrolllinks");i(),e(),$(window).resize(i),$(window).resize(e),$(window).scroll(o);var g,C=!1,b=0;p.mousedown(t),$(window).mousemove(n),$(window).mouseup(s),m.find("li:first").addClass("active")}}();