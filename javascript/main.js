$(document).ready(function(){
	displayGrid(16);
	$('.box').mouseenter(function(){
		$(this).css("background", "blue");
	})

	$('#clear').click(function(){
		$('.box').css("background", "white");
	})

});

function displayGrid(n){
	var size = 960;
	var boxSize = (size - 4*n) / n;
	var $wrapper = $('.wrapper').html('');
	for(var i = 0; i < n; i++){
		for(var j = 0; j < n; j++){
			$wrapper.append($('<div></div>').addClass("box").width(boxSize).height(boxSize) );
		}
		$wrapper.append($('<div></div>').css("clear", "both"));
	}
}

