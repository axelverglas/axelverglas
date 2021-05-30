jQuery(function($) {
	//au click sur le btn-menu
	$('.btn-menu').on("click", function(){
		//j'ajoute et je supprime une classe
		$('.menu').toggleClass('menu-collapse');
	});
});
