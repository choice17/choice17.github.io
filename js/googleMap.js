function initMap() {
    // Create a map object and specify the DOM element for display.
    myCenter=new google.maps.LatLng(24.80361, 120.96861);
    var mapOptions= {
        center:myCenter,
        zoom:12, scrollwheel: false, draggable: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);

    //var mapattr = document.getElementById("googleMap");
    //$("#googleMap").attr("href","https://www.google.com.tw/maps/@24.80361,120.96861,15z?hl=zh-TW");
}

