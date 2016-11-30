/**
 * HelloMarkerのコンストラクタ。緯度、軽度をメンバ変数に設定する。
 * @param map		表示対象の地図
 * @param lat		緯度
 * @param lng		経度
 * @param alt		高度
 * @param velocity	水平面の速度
 * @param callsign	コールサイン
 */
function HelloMarker(map, lat, lng ,alt,velocity,callsign) {
  this.lat_ = lat;
  this.lng_ = lng;
  this.altitude = alt;
  this.h_velocity = velocity;
  this.callsign = callsign;
  this.setMap(map);
}

/** google.maps.OverlayViewを継承 */
HelloMarker.prototype = new google.maps.OverlayView();

/**
 * drawの実装。div要素を生成
 */
HelloMarker.prototype.draw = function() {
  // 何度も呼ばれる可能性があるので、div_が未設定の場合のみ要素生成
  if (!this.div_) {
    // 出力したい要素生成
    this.div_ = document.createElement( "div" );
    this.div_.style.position = "absolute";
    this.div_.style.fontSize = "90%";
    this.div_.style.color = 'red';
    this.div_.style.borderBottom = "solid 1px black";
    this.div_.innerHTML = this.callsign+"<BR />"+this.altitude+" "+this.h_velocity;
    // 要素を追加する子を取得
    var panes = this.getPanes();
    // 要素追加
    panes.overlayLayer.appendChild( this.div_ );
  }

  // 緯度、軽度の情報を、Pixel（google.maps.Point）に変換
  var point = this.getProjection().fromLatLngToDivPixel( new google.maps.LatLng( this.lat_, this.lng_ ) );

  // 取得したPixel情報の座標に、要素の位置を設定
  // これで35.5, 140.0の位置を左上の座標とする位置に要素が設定される
  this.div_.style.left = point.x +20+ 'px';
  this.div_.style.top = point.y -30+ 'px';
}

/**
 *  削除処理の実装
 */
HelloMarker.prototype.remove = function() {
  if (this.div_) {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
}
