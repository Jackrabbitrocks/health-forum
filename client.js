$("a").filter(function() {
return this.hostname && this.hostname !== location.hostname;
}).addClass('external').attr("target", "_blank");

if( $('.faq').length ){
		$(".faq li a").on("click", function(){
	    $(this).next('p').slideToggle(200);
	    return false;
	});
}
