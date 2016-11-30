/**
 * XMLファイルを読む
 * XMLファイルの読み取りパスは変数filenameで変更可能
 */
function readXML(){

	var filename = "./testdata.xml"; 			//ファイル名

	filename += "?" + Math.random(); 			//乱数を付加
	downloadUrl(filename, function(data){

		var xmlDoc = xmlParse(data);
		var markers = xmlDoc.getElementsByTagName("marker");
		for (var i = 0; i < markers.length; i++){
			var modesaddress = markers[i].getAttribute("modesaddress");
			var latitude = markers[i].getAttribute("latitude");
			var longitude = markers[i].getAttribute("longitude");
			var altitude = markers[i].getAttribute("altitude");
			var h_velocity = markers[i].getAttribute("h_velocity");
			var callsign = markers[i].getAttribute("callsign");
			h_direction = markers[i].getAttribute("h_direction");

			createMarker(modesaddress,latitude,longitude,altitude,h_velocity,callsign,h_direction);

			sidebarList += '<a href="javascript:myclick('+ i +')">'+ callsign +'</a><br />';
		} //end of for


		document.getElementById("side_bar").innerHTML = sidebarList;


	}); //end of downloadUrl

	setTimeout(removeMarkers,500);
	setTimeout(readXML,500);
}
