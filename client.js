$("a").filter(function() {
return this.hostname && this.hostname !== location.hostname;
}).addClass('external').attr("target", "_blank");

if( $('.faq').length ){
		$(".faq li a").on("click", function(){
	    $(this).next('p').slideToggle(200);
	    return false;
	});
}

var MostWired = (function() {
  if ($('.mw-carosel').length > 0) {

    var carosel, slideCounter, $slides, slideInterval;

    $slides = $('.mw-carosel').find('div');

    slideCounter = 1;

    carosel = function() {
      if (slideCounter == $slides.length) {
        slideCounter = 0;
      }
      $('.display').text(slideCounter);
      $slides.fadeOut();
      $slides.eq(slideCounter).fadeIn();
      slideCounter++;
    }

  }
  return {
    mwCarosel: function() {
      slideInterval = setInterval(carosel, 3000);
    }
  }
})();

MostWired.mwCarosel();