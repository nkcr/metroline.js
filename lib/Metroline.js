/*
 * Author : Noémien Kocher
 * Infos & bug reports at https://github.com/nkcr/Metroline
 * Licensed under the MIT license
 */
(function() {

  this.Metroline = function() {
    var scrollcursor = $('#scrollcursor');
    var body = $("body");
    var scrolllinks = $("#scrolllinks");

    var page_height,
        screen_height,
        screen_page,
        page_screen,
        cursor_height,
        title_offset;

    /*
     * Display scrollbar and title
     */
    init_metrics();
    display_titles();

    /*
     * Window resize handle
     */
    $(window).resize(init_metrics);
    $(window).resize(display_titles);

    /*
     * Init metrics based on screen size. Need to be called each window resize
     */
    function init_metrics() {
      page_height = Math.max($(document).height(), $(window).height());
      screen_height = window.innerHeight;
      screen_page = screen_height / page_height;
      page_screen = page_height / screen_height;
      cursor_height = screen_page * screen_height;
      title_offset = cursor_height / 3;

      // Set cursor height relative to the screen and page
      scrollcursor.css("height", cursor_height);
    }

    /*
     * Update the scrollbar when window scroll
     */
    $(window).scroll(wscroll);
    function wscroll() {
      scrollcursor.css("top", screen_page * $(window).scrollTop());
      current_title();
    }

    /*
     * Handle the scroll made by mouse drag
     */
    var down = false;
    var initialY;
    var initial_top = 0;

    scrollcursor.mousedown(mdown);
    $(window).mousemove(mmove);
    $(window).mouseup(mup);

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
     * Display & update titles
     */
    function display_titles() {
      scrolllinks.find("li").remove();
      $("section").each(titles);
    }
    scrolllinks.find("li:first").addClass("active");
    function titles() {
      var position = screen_height * ($(this).position().top +
                     $(this).height() / 2) / page_height;
      scrolllinks.append("
      <li style=\"top: " + position + "px\"><a href=\"#" + $(this).attr("id") +
                                  "\">" + $(this).data("title") + "</a></li>");
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
