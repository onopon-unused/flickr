// DOMを操作する場合はページの読み込みを待つ
window.onload = function() {

    var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=drawImg';
    $("#searchButton").click(function(e){
	$('#resultArea').empty();
	var keyword = $("#keyword").val();
	var keyword_uri = encodeURIComponent(keyword);
	url = url+"&tags="+keyword_uri;
        var script = $('<script/>').attr({src: url});
    	$('head').append(script);
    });
}

function drawImg(result) {
    console.log(result);
    $("#resultArea").attr({align: "center"});
    var items = result.items;
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
	var imgUrl = item.media.m;
        var img = $('<img>').attr({src: imgUrl}).attr({width: "10%"}).attr({vspace: 10}).attr({hspace: 10});
        img.click(function(event) { window.open(item.link); });
    	$('#resultArea').append(img);
    }

}
