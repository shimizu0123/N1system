function removeMarkers(){
	gmarkers.forEach(function(marker, idx){
 	marker.setMap(null);
	});
	gmark.forEach(function(marker, idx){
 	marker.setMap(null);
	});
	sidebarList = '';
}
