/*globals $:false, window:false, document:false, Ya:false */
$(
  function() {
    'use strict';
    $.getJSON(
      'http://free.sharedcount.com/?apikey=d730c518430eabcabc46ab79528c744067afa17e&url=' + encodeURIComponent(document.location.href),
      function (data) {
        if (data.Facebook.total_count !== 0) {
          $('.count-facebook').html(data.Facebook.total_count).fadeIn();
        }
        if (data.Twitter !== 0) {
          $('.count-twitter').html(data.Twitter).fadeIn();
        }
        if (data.GooglePlusOne !== 0) {
          $('.count-googleplus').html(data.GooglePlusOne).fadeIn();
        }
        if (data.LinkedIn !== 0) {
          $('.count-linkedin').html(data.LinkedIn).fadeIn();
        }
        if (data.Reddit !== 0) {
          $('.count-reddit').html(data.Reddit).fadeIn();
        }
        if (data.StumbleUpon !== 0) {
          $('.count-stumbleupon').html(data.StumbleUpon).fadeIn();
        }
        if (data.Diggs !== 0) {
          $('.count-digg').html(data.Diggs).fadeIn();
        }
      }
    );
    $('.button').click(
      function (event) {
        event.preventDefault();
        var $this = $(this);
        window.open(
          $this.attr('href'),
          $this.attr('title'),
          'width=640,height=300'
        );
      }
    );
  }
);
