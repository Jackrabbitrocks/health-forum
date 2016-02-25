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
      $slides.fadeOut(600);
      $slides.eq(slideCounter).fadeIn(600);
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

if ($(".LA-offer-module").length > 0){
  var $offerModule = $(".LA-offer-module");

  $offerModule.on('mouseover', function(e){
    $offerModule.removeClass('active').find('.LA-offer-image').attr('src', '/ext/resources/inc-hhn/img/misc/devicesBW.png');
    $(this).addClass('active').find('.LA-offer-image').attr('src', '/ext/resources/inc-hhn/img/misc/devicesColor.png');
  });

  $offerModule.on('click', function(){
    $currentModule = $(this).data('product');
    switch ($currentModule){
      case 'access':
      targetURL = "http://eforms.kmpsgroup.com/jointforms/Forms/Subscription.aspx?pubcode=HHN&promoCode=15HHNWEB";
      break;
      case 'daily':
      targetURL = "http://eforms.kmpsgroup.com/jointforms/Forms/Subscription.aspx?pubcode=HFENL&step=form";
      break;
      case 'hf':
      targetURL = "http://www.hfmmagazine.com/Subscriber/access.dhtml";
      break;
      case 'trustee':
      targetURL = "http://eforms.kmpsgroup.com/jointforms/Forms/Subscription.aspx?pubcode=TRU&promoCode=15TRUWEB";
      break;
    }
    window.open(targetURL);
  });
};