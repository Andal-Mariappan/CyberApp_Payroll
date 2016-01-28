myApp.controller('viewTeamsController', ['$scope', '$cordovaGeolocation', function($scope, $cordovaGeolocation) {

    //Data
    var viewTeams = [{
        img: 'img/simson.png',
        FirstName: 'Sarayut',
        LastName: 'Kungsaranuwat',
        lat: 13.9338700,
        long: 100.7179009
    }, {
        img: 'img/simson.png',
        FirstName: 'Sarayut2',
        LastName: 'Kungsaranuwat2',
        lat: 13.9359000,
        long: 100.7180000
    }, {
        img: 'img/simson.png',
        FirstName: 'Sarayut3',
        LastName: 'Kungsaranuwat3',
        lat: 13.9400053,
        long: 100.7211000
    }, {
        img: 'img/simson.png',
        FirstName: 'Sarayut4',
        LastName: 'Kungsaranuwat4',
        lat: 13.9290659,
        long: 100.7180381
    }, {
        img: 'img/simson.png',
        FirstName: 'Sarayut5',
        LastName: 'Kungsaranuwat5',
        lat: 13.9345659,
        long: 100.7155331
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
        

        google.maps.event.addListener(marker, 'mousedown', function() {
            infoWindow.setContent(marker.title);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }

    for (i = 0; i < viewTeams.length; i++) {
        createMarker(viewTeams[i]);
    }


}]);
