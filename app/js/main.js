// magnificPopup
// $('.popup-with-form').magnificPopup({
//     type: 'inline',
//     preloader: false,
//     focus: '#name',

//     // When elemened is focused, some mobile browsers in some cases zoom in
//     // It looks not nice, so we disable it:
//     callbacks: {
//         beforeOpen: function() {
//             if ($(window).width() < 700) {
//                 this.st.focus = false;
//             } else {
//                 this.st.focus = '#name';
//             }
//         }
//     }
// });


//period
$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 10, 90 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
  });


// YouTubePopUp
	$("a.vid").YouTubePopUp();


// GoogleMaps 
if($(".map-canvas").length>0){
    setTimeout(function(){
       initializeMap();
    }, 500 );
}
 
// GoogleMap
function initializeMap() {
    var myCenter=new google.maps.LatLng(37.572404, 126.981804)
    var image = 'img/location-marker.png';
    var marker=new google.maps.Marker({
        position:myCenter,
        title: 'Beemloop office',
        icon: image,
    });

    var mapProp = {
        center:myCenter,
        zoom: 17,
        draggable: false,
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var contentString = '<div><b>AVOCADO</b><br> Sambong-ro 81, Seoul, KR</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
    marker.setMap(map);

    google.maps.event.addListener(marker, 'click', function() {

        infowindow.setContent(contentString);
        infowindow.open(map, marker);

    }); 
}


//Styler
(function($) {
$(function() {

  $('select').styler();

});
})(jQuery);