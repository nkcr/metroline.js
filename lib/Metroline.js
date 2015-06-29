(function() {

  this.Metroline = function() {
    var scrollcursor = $('#scrollcursor');
    var body = $("body");

    var page_height = Math.max($(document).height(), $(window).height());
    var screen_height = window.innerHeight;
    var screen_page = screen_height / page_height;
    var page_screen = page_height / screen_height;
    var cursor_height = screen_page * screen_height;
    var cursor_height_half = cursor_height / 2;
    var title_offset = cursor_height / 3;

    // Set cursor height relative to the screen and page
    scrollcursor.css("height", cursor_height);

    $(window).scroll(wscroll);

    var down = false;
    var initialY;
    var initial_top = 0;

    scrollcursor.mousedown(mdown);
    $(window).mousemove(mmove);
    $(window).mouseup(mup);

    function wscroll() {
      scrollcursor.css("top", screen_page * $(window).scrollTop());
      current_title();
    }
    function mmove(event) {
      if(down) {
        var delta = event.clientY - initialY;
        if(delta != 0) {
          $(window).scrollTop(page_screen * (initial_top + delta));
        }
      }
    }
    function mdown(event) {
      down = true;
      initialY = event.clientY;
      initial_top = scrollcursor.position().top;
      body.addClass("unselectable");
    }
    function mup() {
      down = false;
      body.removeClass("unselectable");
    }

    /*
     * Display titles
     */
    var scrolllinks = $("#scrolllinks");
    scrolllinks.find("li").remove();
    $("section").each(titles);
    scrolllinks.find("li:first").addClass("active");
    function titles() {
      var position = screen_height * $(this).position().top / page_height + cursor_height_half;
      scrolllinks.append("<li style=\"top: " + position + "px\"><a href=\"#" + $(this).attr("id") + "\">" + $(this).data("title") + "</a></li>");
    }
    function current_title() {
      scrolllinks.find("li").each(check_title);
    }
    function check_title() {
      var top = $(this).position().top;
      var scroll = screen_page * $(window).scrollTop();
      if(top < scroll + cursor_height && top > scroll) $(this).addClass("active");
      else $(this).removeClass("active");
    }
  }

}());
