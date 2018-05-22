var imageCount = 1;
		var total = 3;

		function slider(i) {
			var image = document.getElementById("Maps");
			imageCount++;
			if (imageCount > total) {
				imageCount = 1;
			}
			if (imageCount < 1) {
				imageCount = total;
			}
			image.src = "Maps" + imageCount + ".png";
		}

		window.setInterval(function sliderA() {
			var image = document.getElementById("Maps");
			imageCount++;
			if (imageCount > total) {
				imageCount = 1;
			}
			if (imageCount < 1) {
				imageCount = total;
			}
			image.src = "Maps" + imageCount + ".png";

		}, 3000);