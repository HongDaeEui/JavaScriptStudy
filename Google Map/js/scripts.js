var map;

function initMap() {
  var seoul = { lat: 37.5642135 ,lng: 127.0016985 };
  map = new google.maps.Map( document.getElementById('map'), {
      zoom: 12,
      center: seoul,
    });

  new google.maps.Marker({
    position: seoul,
    map: map,
    label: "너의 나무가 심겨진 곳"
  });

  new google.maps.Marker({
    position: { lat: 37.544677 ,lng: 126.972100 },
    map: map,
    label: "너의 나무가 심겨진 곳"
  });

  new google.maps.Marker({
    position: { lat: 37.548877 ,lng: 126.993895 },
    map: map,
    label: "너의 나무가 심겨진 곳"
  });
}

function changeCenter(){
    var busan = { lat: 35.1379222, lng: 129.05562775 };
    map.panTo(busan);
    map.setZoom(14);

    // map = new google.maps.Map( document.getElementById('map'), {
    //     zoom: 14,
    //     center: busan
    //   });
  }

  var btn = document.getElementById("button"); 

  btn.addEventListener("click", changeCenter); 