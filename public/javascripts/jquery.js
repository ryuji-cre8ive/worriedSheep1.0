$(function () {
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href = $(this).attr('href');
    var target = $(href === '#' || href === '' ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});
$(function(){
  
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.btn-trigger');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( $nav.hasClass( open ) ) {
      $nav.removeClass( open );
    } else {
      $nav.addClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);

