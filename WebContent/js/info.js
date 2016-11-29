// -------------------------------------------------
// 初期設定（いったんHTMLを空にする）
// -------------------------------------------------
$(function(){
    $("table.tbl tbody").html("");
});

// -------------------------------------------------
// XML読み込み
// -------------------------------------------------

function xmlLoad(){
    $.ajax({
        url:'./testdata.xml',
        type:'get',
        dataType:'xml',
        timeout:1000,
        success:parse_xml
    });
}

// -------------------------------------------------
// XMLデータを取得
// -------------------------------------------------

function parse_xml(xml,status){
    if(status!='success')return;
    $(xml).find('marker').each(disp);
}

// -------------------------------------------------
// HTML生成関数
// -------------------------------------------------

function disp(){

    //各要素を変数に格納
    var modesaddress = $(this).find('modesaddress').text();
    var latitude = $(this).find('latitude').text();
    var longitude = $(this).find('longitude').text();
    var altitude = $(this).find('altitude').text();
    var h_velocity = $(this).find('h_velocity').text();
    var $target = $(this).find('callsign').text();
    var h_direction = $(this).find('h_direction').text();
    createMarker(modesaddress,latitude,longitude,altitude,h_velocity,callsign,h_direction);
    sidebarList += '<a href="javascript:myclick('+ i +')">'+ callsign +'</a><br />';
    document.getElementById("side_bar").innerHTML = sidebarList;
}

//関数実行
$(function(){
    xmlLoad();
});
