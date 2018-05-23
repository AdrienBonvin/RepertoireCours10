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
	
		var varImageBasique = document.getElementById("maps");
		var varMapZones = document.getElementById("zones");
		var varImageZone = document.getElementById("imageZone");
		var varMapImage = document.getElementById("photos");
		var varImagePhotos = document.getElementById("imagePhotos");
		var varMapCompte = document.getElementById("compte");
		var varImageCompte = document.getElementById("imageCompte");

		
		varMapZones.addEventListener("click", function(){
			varImageZone.style="";
			varImagePhotos.style="display: none";
			varImageCompte.style="display: none"
			varImageBasique.style="display: none";
			;});

		
		varMapImage.addEventListener("click", function(){
			varImageZone.style="display: none";
			varImagePhotos.style="";
			varImageCompte.style="display: none"
			varImageBasique.style="display: none";
			;});

		
		varMapCompte.addEventListener("click", function(){
			varImageZone.style="display: none";
			varImagePhotos.style="display: none";
			varImageCompte.style="";
			varImageBasique.style="display: none";
			;});