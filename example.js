$(document).ready(function(){

	$("h2").click(
		function(){
			explanations = $(this).next();
			if(explanations.hasClass("h")){
				explanations.removeClass("h");
			}else{
			explanations.addClass("h");
			};
		}
	);

})