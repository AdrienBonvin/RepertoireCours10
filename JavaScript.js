var imageCount = 1;
		var total = 3;

		function slider(i) {
			var image = document.getElementById("landscape");
			imageCount++;
			if (imageCount > total) {
				imageCount = 1;
			}
			if (imageCount < 1) {
				imageCount = total;
			}
			image.src = "landscape" + imageCount + ".jpeg";
		}

		window.setInterval(function sliderA() {
			var image = document.getElementById("landscape");
			imageCount++;
			if (imageCount > total) {
				imageCount = 1;
			}
			if (imageCount < 1) {
				imageCount = total;
			}
			image.src = "landscape" + imageCount + ".jpeg";

		}, 3000);