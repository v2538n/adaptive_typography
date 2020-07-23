(function($){
	$(document).ready(function(){


		/* calc(24px + (40 - 24) * (100vw - 320px) / (1920 - 320)); */

		/*var resolution = [320, 480, 576, 768, 992, 1024, 1200, 1280, 1400, 1600, 1920, 2048, 2560, 3840];

		var minSize  = 24,
			maxSize  = 40,
			diffSize = maxSize - minSize,
			resultSize = 0;

		var rate_1 = 0,
			rate_2 = 1920 - 320,
			resultRate = 0;

		$.each(resolution, function(index, value){

			rate_1 = value - 320;

			resultRate = rate_1 / rate_2;

			resultSize = minSize + (diffSize * resultRate);

			console.log("Resolution: " + value + " | rate: " + resultRate + " | resultSize: " + resultSize);

		});*/

/* --------------------------------------------------------------------------------------------------------------------------------------------------*/

		/*calc(minSize + diffMinSizeMaxSize * (100vw / maketSize));*/

		/*var maketSize = 1280;

		$.each(resolution, function(index, value){

			rate_1 = value / maketSize;

			resultSize = minSize + (diffSize * (rate_1));

			console.log("Resolution: " + value + " | rate: " + rate_1 + " | resultSize: " + resultSize);
		});*/


/* --------------------------------------------------------------------------------------------------------------------------------------------------*/		

		/*calc(minSize + (diffSize + diffSize * 0.7) * (( 100vw - minResolution) / maketSize));*/

		/*var minResolution = 320,
			maketSize = 1280;

		$.each(resolution, function(index, value){

			rate_1 = diffSize + (diffSize * 0.7);

			rate_2 = (value - minResolution) / maketSize; 

			resultRate = rate_1 * rate_2;

			resultSize = minSize + resultRate;

			console.log("Resolution: " + value +  " | rate: " + rate_2 + " | resultSize: " + resultSize);

		});*/
		
	});
})(jQuery);