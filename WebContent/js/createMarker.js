/**
 * Googleマップ上のマーカーを作成する
 * @param modesaddress	機体のモードSアドレス
 * @param latitude		緯度
 * @param longitude		経度
 * @param altitude		高度
 * @param h_velocity	水平面の速度
 * @param callsign		コールサイン
 * @param h_direction	水平面の向き
 */
function createMarker(modesaddress,latitude,longitude,altitude,h_velocity,callsign,h_direction){
	var velocity =   Math.round(h_velocity);
	var alt2 = ( '00000' + altitude ).slice( -5 );
	var alt = alt2.slice(0, 3);

	var marker = new google.maps.Marker({
		map: map, 												//マーカーを表示する地図名
	    position: new google.maps.LatLng(latitude,longitude), 	//マーカーの表示位置
	    icon: icon, 											//マーカーアイコンの設定
	    title: callsign											//オンマウスで表示させる文字
	});

	gmarkers.push(marker);

	var newIcon = marker.getIcon()
	newIcon.rotation =parseInt(h_direction) ;
	marker.setIcon(newIcon);

	var html = "CALL SIGN:"+callsign+"<BR />ALTITUDE:"+altitude+"<BR />VELOCITY"+h_velocity;

	google.maps.event.addListener(marker, 'click', function() {
		 infoWindow.setContent(html); 	//情報ウィンドウの内容
		 infoWindow.open(map,marker); 	//情報ウィンドウを表示
		 map.panTo(point); 				//マーカーを地図の中心位置に移動
	});

	var mark = new HelloMarker( map, latitude,longitude,alt,velocity,callsign );
	gmark.push(mark);
}
