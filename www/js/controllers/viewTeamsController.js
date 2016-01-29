myApp.controller('viewTeamsController', ['$scope', '$cordovaGeolocation', function($scope, $cordovaGeolocation) {

    //Data
    var viewTeams = [{
        img : 'img/simson.png',
        FirstName: 'Sarayut',
        LastName: 'Kungsaranuwat',
        lat: 13.9338700,
        long: 100.7179009
    }, {
        img : 'img/simson.png',
        FirstName: 'Nuttakrittra',
        LastName: 'Kungsaranuwat',
        lat: 13.9349000,
        long: 100.7180000
    }, {
        img : 'img/simson.png',
        FirstName: 'Jakkrich',
        LastName: 'Jong',
        lat: 13.9400053,
        long: 100.7211000
    }, {
        img : 'img/simson.png',
        FirstName: 'Theerasak',
        LastName: 'Tubrit',
        lat: 13.9290659,
        long: 100.7180381
    }];

    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(13.9338659, 100.7175381),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function(info) {

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.FirstName + " " + info.LastName
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'mousedown', function() {
            infoWindow.setContent( marker.title  + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }

    for (i = 0; i < viewTeams.length; i++) {
        createMarker(viewTeams[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }



    //  var myLocation = new google.maps.LatLng(13.7566008, 100.5393084);


    // var map = new google.maps.Map(document.getElementById('map'), {
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //     center: myLocation,
    //     zoom: 11,
    //     streetViewControl: true,
    //     mapTypeControl: false,
    //     zoomControl: false
    // });

    // var locations = [
    //     ['โรงพยาบาลพญาไท 1 <br />364/1 Sri Ayuthaya Road, Phayathai, Ratchathewi, Bangkok 10400 <br />โทร : 02 640 1111', 13.7566008, 100.5393084, 1],
    //     ['โรงพยาบาลพญาไท 2 <br />แขวง สามเสนใน เขต พญาไท กรุงเทพมหานคร 10400 <br />โทร : 02 617 2021', 13.7699038, 100.54076, 2],
    //     ['โรงพยาบาลพญาไท 3 <br />207/26 ถนน เพชรเกษม จังหวัด กรุงเทพมหานคร <br />โทร : 02 467 1111', 13.723303, 100.4635787, 3],
    //     ['โรงพยาบาลพญาไทศรีราชา <br />90 ศรีราชานคร 3 อำเภอ ศรีราชา จังหวัด ชลบุรี <br />โทร : 038 770 193', 13.1691616, 100.9279449, 4]
    // ];


    // // var request = {
    // //     location : myLocation,
    // //     redius : '500',
    // //     type :['stroe']
    // // };
    // // var service = new google.maps.places.PlacesService(map);
    // //     service.nearbySearch(request, function(results,status){
    // //         if(status==google.maps.places.PlacesServiceStatus.OK){

    // //         }

    // //     });
    // var infowindow = new google.maps.InfoWindow();
    // var marker, i;
    // var image = "img/simson.png";
    // for (i = 0; i < locations.length; i++) {
    //     marker = new google.maps.Marker({
    //         map: map,
    //         icon: image,
    //         position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4])
    //     });

    //     google.maps.event.addListener(marker, 'mousedown', (function(marker, i) {

    //             return function() {

    //                 infowindow.setContent(locations[i][0]);
    //                 infowindow.open(map, marker);
    //             }
    //         })
    //         (marker, i));
    // }

}]);
